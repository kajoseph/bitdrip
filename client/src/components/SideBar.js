import '../styles/sidebar.scss';

import { createSignal, For, onMount, Show } from 'solid-js';
import { Icon, IconButton } from './Icon';
import { useRouterContext } from '../contexts/router';
import { useSiteContext } from '../contexts/site';
import { Link } from './Link';

export const SideBar = (props) => {

  const { location } = useRouterContext();
  const [siteState] = useSiteContext();

  return (
    <div id='sidebar'>
      <div class='flex-column'>
        <Link class='link' href='/'>
          <div class='justify-content-left'>
            <span class='logo'>bitdrip</span>
          </div>
          <div class='justify-content-right pad-l-20'>
            <span class='logo pre'>a faucet by</span><span class='logo sub pad-l-5'>bitpay</span>
          </div>
        </Link>
        <div class='pad-t-40'></div>
        <div class='flex-column scroll'>
          <For each={siteState.faucets} fallback={<div>Loading...</div>}>
            {(faucet) =>
              <Link class={`link ${location === 'schedules' ? 'active' : ''} marg-y-10`} href={`/${faucet.code}`}>
                <div class='option flex-row'>
                  {/* <Icon icon={faucet.icon || 'coins'} /> */}
                  <img class='icon' src={faucet.image.replace(/_\w/, '')} />
                  <Show when={faucet.code !== faucet.chain}>
                    <img
                      class='icon-network'
                      src={siteState.faucets.find(f => f.code == faucet.chain).image} />
                  </Show>
                  <div class='pad-l-10'>{faucet.name + (faucet.chain !== faucet.code ? ` (${faucet.chain})` : '')}</div>
                </div>
              </Link>
            }
          </For>
        </div>
      </div>
    </div>
  )
};