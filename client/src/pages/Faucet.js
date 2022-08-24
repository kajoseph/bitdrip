import { createEffect, createRenderEffect, createSignal, Show } from 'solid-js';
import * as CWC from 'crypto-wallet-core';
import { useRouterContext } from '../contexts/router';
import { useSiteContext } from '../contexts/site';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import * as api from '../api/faucet';
import * as utils from '../lib/utils';

import '../styles/faucet.scss';

export const Faucet = (props) => {
  const { location } = useRouterContext();
  const [siteState] = useSiteContext();
  
  const [address, setAddressStr] = createSignal('');
  const [amount, setAmountStr] = createSignal('');
  const [submitting, setSubmitting] = createSignal(false);
  const [submitMsg, setSubmitMsg] = createSignal(null);
  const [getFaucet, setFaucet] = createSignal(siteState.faucets.find(f => f.code === location()));
  const [getParent, setParent] = createSignal(siteState.faucets.find(f => f.code === getFaucet().chain));
  const [amountError, setAmountError] = createSignal('Amount is not valid');
  
  
  
  const strippedCode = () => {
    if (getFaucet().code.indexOf('_') > -1) {
      return getFaucet().code.substring(0, getFaucet().code.indexOf('_'));
     }
     return getFaucet().code;
  };
  const hasParent = () => getFaucet().chain !== location();

  createEffect(() => {
    const faucet = siteState.faucets.find(f => f.code === location())
    setFaucet(faucet);
    setParent(siteState.faucets.find(f => f.code === faucet.chain));
  });

  const submitRequest = () => {
    setSubmitMsg(null);
    let hasError = false;

    if (!isValidAddress()) {
      document.getElementById('address-error').classList.add('show');
      hasError = true;
    }

    if (!isValidAmount()) {
      document.getElementById('amount-error').classList.add('show');
      hasError = true;
    }

    if (!hasError) {
      console.log('submitted', address(), amount());
      setSubmitting(true);
      api.pourFaucet({ address: address(), amount: amount(), chain: getFaucet().chain, ticker: getFaucet().code })
        .catch(err => {
          if (err.status === 400) {
            setSubmitMsg(utils.tryParseJSON(err.data).msg || err.data);
          } else {
            setSubmitMsg('An unexpected error occurred');
          }
        })
        .then(({ data: result }) => {
          console.log(result);
          setSubmitMsg('Transaction ID: ' + result.txid); // TODO
        })
        .finally(() => setSubmitting(false));
    }
  };

  const setAddress = (elem) => setAddressStr(elem.target.value);
  const setAmount = (elem) => setAmountStr(elem.target.value);

  const clearAddressError = () => document.getElementById('address-error').classList.remove('show');
  const clearAmountError = () => document.getElementById('amount-error').classList.remove('show');

  const isValidAddress = () => {
    try {
      switch (getFaucet().chain) {
        case 'BTC':
          return CWC.BitcoreLib.Address.fromString(address());
        case 'BCH':
          return CWC.BitcoreLibCash.Address.fromString(address());
        case 'DOGE':
          return CWC.BitcoreLibDoge.Address.fromString(address());
        case 'LTC':
          return CWC.BitcoreLibLtc.Address.fromString(address());
        case 'ETH':
        case 'MATIC':
        default:
          return CWC.Web3.utils.isAddress(address());
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const isValidAmount = () => {
    if (isNaN(amount()) || !amount()) {
      setAmountError('Amount is not valid');
      return false;
    }
    if (amount() < getFaucet().limit.min) {
      setAmountError('Minimum amount is ' + getFaucet().limit.min + ' ' + strippedCode());
      return false;
    }
    if (amount() > getFaucet().limit.max) {
      setAmountError('Maximum amount is ' + getFaucet().limit.max + ' ' + strippedCode());
      return false;
    }
    return true;
  };

  return (
    <div id='faucet' class='flex-11a'>
      <div class='justify-content-center width-100 pad-t-40'>
        <Show when={getFaucet()} fallback={<div>Loading...</div>}>
          <div class='flex-column pad-b-40'>

            {/* Faucet Logo & Chain */}
            <div class='flex-row justify-content-center marg-r-60'>
              {/* Logo */}
              <div>
                <img class='icon' src={getFaucet().image} />
                <Show when={hasParent()}><img class='icon-network' src={getParent().image} /></Show>
              </div>
              {/* Chain */}
              <div class='flex-column justify-content-center'>
                <div class='flex-column'>
                  <div class={`title ${!hasParent() ? 'pad-l-30' : ''}`}>{getFaucet().name}</div>
                  <Show when={hasParent()}><div class='title-sub justify-content-end'>on {getParent().name}</div></Show>
                </div>
              </div>
            </div>


            {/* Faucet */}
            <div class='flex-column marg-y-50'>
              
              {/* Address */}
              <Input class='address' onfocus={clearAddressError} onfocusout={setAddress} placeholder='Enter receiving address'></Input>
              <div id='address-error' class='error justify-content-start marg-t-5'>Address is not valid</div>
              
              {/* Amount */}
              <div class='flex-row justify-content-center'>
                <div class='flex-column'>
                  <div class='flex-row justify-content-center'>
                    <Input class='amount marg-t-20' onfocus={clearAmountError} onfocusout={setAmount} type='number' placeholder={`Enter amount in ${strippedCode()}`} min='0'></Input>
                  </div>
                  <div id='amount-error' class='error justify-content-start marg-t-5'>{amountError()}</div>
                </div>
              </div>
              
              {/* Submit button */}
              <div class='flex-row justify-content-center'>
                <Button id='submit' class='marg-y-20' onClick={submitRequest} disabled={submitting()}>Submit</Button>
              </div>
              
              {/* Message center */}
              <Show when={submitting()}>
                <div class='flex-row justify-content-center'>
                  <Icon icon='tower-broadcast'/><div class='pad-x-20 pulse'>Broadcasting</div><Icon icon='tower-broadcast'/>
                </div>
              </Show>
              <Show when={submitMsg()} >
                <div class='flex-row justify-content-center'>
                  {submitMsg()}
                </div>
              </Show>

            </div>


            {/* Metadata */}
            <div class='flex-grow flex-column'>
              {/* White space dive to push metadata to bottom of page */}
              <div class='flex-11a'></div>
              {/* Metadata div */}
              <div class='metadata flex-column justify-content-center pad-20'>
                <div class='title pad-b-20'>Metadata</div>

                <table>
                  <thead>
                    <tr>
                      <th>Max</th>
                      <th>Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{getFaucet().limit.max} {strippedCode()}</td>
                      <td>{getFaucet().limit.min} {strippedCode()}</td>
                    </tr>
                  </tbody>
                </table>

                <Show when={getFaucet().contractAddress}>
                  <div class='pad-10'>Contract Address: {getFaucet().contractAddress}</div>
                  <div class='pad-10'>Chain ID: {getFaucet().chainId}</div>
                </Show>
              </div>
            </div>


          </div>  
        </Show>
      </div>
    </div>
  )
};
