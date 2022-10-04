import api from './api'

export const fetchFaucets = () => api.GET('/faucet');
export const pourFaucet = ({ address, amount, chain, ticker, captchaToken }) => api.POST('/faucet', { headers: { 'x-captcha': captchaToken }, body: { address, amount, chain, ticker } });

/*
api.GET('https://test.bitpay.com/currencies')
  .then(({ data: currencies }) => {
    currencies = currencies.filter(f => !!f.chain);
    for (let c of currencies) {
      const wallet = Object.values(selectableWallets.data).find(wallet => wallet.currencies[c.code]);
      if (!wallet) {
        continue;
      }
      c.image = wallet.currencies[c.code].image;
    }
    return currencies.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
  });

  // data.filter(f => !!f.chain).sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0));//api.GET('/faucets');

*/
  const selectableWallets = {
    "data": {
      "bitpay": {
        "key": "bitpay",
        "displayName": "BitPay",
        "avatar": "bitpay-wallet.png",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "DOGE": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "ETH": {
            "payPro": true,
            "qr": {
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "USDC": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "PAX": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "GUSD": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "BUSD": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          },
          "WBTC": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "WBTC",
            "image": "https://test.bitpay.com/img/icon/currencies/WBTC.svg"
          },
          "SHIB": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "SHIB",
            "image": "https://test.bitpay.com/img/icon/currencies/SHIB.svg"
          },
          "DAI": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "DAI",
            "image": "https://test.bitpay.com/img/icon/currencies/DAI.svg"
          },
          "LTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          },
          "APE": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "APE",
            "image": "https://test.bitpay.com/img/icon/currencies/APE.svg"
          },
          "EUROC": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "EUROC",
            "image": "https://test.bitpay.com/img/icon/currencies/EUROC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitpay-wallet.png"
      },
      "copay": {
        "key": "copay",
        "displayName": "Copay",
        "avatar": "copay-wallet.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "DOGE": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "ETH": {
            "payPro": true,
            "qr": {
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "USDC": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "PAX": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "GUSD": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "BUSD": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          },
          "WBTC": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "WBTC",
            "image": "https://test.bitpay.com/img/icon/currencies/WBTC.svg"
          },
          "SHIB": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "SHIB",
            "image": "https://test.bitpay.com/img/icon/currencies/SHIB.svg"
          },
          "DAI": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "DAI",
            "image": "https://test.bitpay.com/img/icon/currencies/DAI.svg"
          },
          "LTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/copay-wallet.svg"
      },
      "blockchainWallet": {
        "key": "blockchainWallet",
        "displayName": "Blockchain Wallet",
        "avatar": "blockchain-wallet.svg",
        "payPro": true,
        "invoiceDefault": "BTC",
        "uniCode": "bitcoin:?r=https://test.bitpay.com",
        "verificationLink": "https://test.bitpay.com/id/verify",
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/blockchain-wallet.svg"
      },
      "squareCash": {
        "key": "squareCash",
        "displayName": "Cash App",
        "lightning": true,
        "avatar": "square-cash-app.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/square-cash-app.svg"
      },
      "coinbase": {
        "key": "coinbase",
        "displayName": "Coinbase",
        "avatar": "coinbase.svg",
        "offChainMode": true,
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinbase.svg"
      },
      "coinbaseP2P": {
        "key": "coinbaseP2P",
        "displayName": "Coinbase",
        "avatar": "coinbase.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinbase.svg"
      },
      "coinbasePro": {
        "key": "coinbasePro",
        "displayName": "Coinbase Pro",
        "avatar": "coinbase-pro.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinbase-pro.svg"
      },
      "coinbaseWallet": {
        "key": "coinbaseWallet",
        "displayName": "Coinbase Wallet",
        "avatar": "coinbase-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinbase-wallet.svg"
      },
      "gemini": {
        "key": "gemini",
        "displayName": "Gemini",
        "avatar": "gemini.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/gemini.svg"
      },
      "coinjar": {
        "key": "coinjar",
        "displayName": "CoinJar",
        "avatar": "coinjar.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinjar.svg"
      },
      "shakepay": {
        "key": "shakepay",
        "displayName": "Shakepay",
        "avatar": "shakepay.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/shakepay.svg"
      },
      "paxful": {
        "key": "paxful",
        "displayName": "Paxful",
        "avatar": "paxful.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/paxful.svg"
      },
      "btcCom": {
        "key": "btcCom",
        "displayName": "BTC.com Wallet",
        "avatar": "btc-com-wallet.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/btc-com-wallet.svg"
      },
      "exodusWallet": {
        "key": "exodusWallet",
        "displayName": "Exodus Wallet",
        "avatar": "exodus-wallet.svg",
        "payPro": true,
        "lightning": true,
        "supportedNetworks": [
          "polygon"
        ],
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "ETH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          },
          "USDC_m": {
            "payPro": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "USDC_m",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC_m.svg"
          },
          "ETH_m": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "ETH_m",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH_m.svg"
          },
          "PAX_m": {
            "payPro": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "PAX_m",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX_m.svg"
          },
          "GUSD_m": {
            "payPro": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "GUSD_m",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD_m.svg"
          },
          "MATIC": {
            "payPro": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "MATIC",
            "image": "https://test.bitpay.com/img/icon/currencies/MATIC.svg"
          },
          "MATIC_e": {
            "payPro": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "MATIC_e",
            "image": "https://test.bitpay.com/img/icon/currencies/MATIC_e.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/exodus-wallet.svg"
      },
      "brdWallet": {
        "key": "brdWallet",
        "displayName": "BRD Wallet",
        "avatar": "brd-wallet.svg",
        "payPro": true,
        "uniCode": "bitcoin:?r=https://test.bitpay.com",
        "verificationLink": "https://test.bitpay.com/id/verify",
        "invoiceDefault": "BTC",
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/brd-wallet.svg"
      },
      "edgeWallet": {
        "key": "edgeWallet",
        "displayName": "Edge Wallet",
        "avatar": "edge-wallet.svg",
        "uniCode": "edge:?r=https://test.bitpay.com",
        "verificationLink": "https://test.bitpay.com/id/verify",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/edge-wallet.svg"
      },
      "bakkt": {
        "key": "bakkt",
        "displayName": "Bakkt",
        "avatar": "bakkt.svg",
        "uniCode": "bakkt://bitpay",
        "offChainMode": true,
        "invoiceDefault": "USD",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/bakkt.svg"
      },
      "bitcoinCom": {
        "key": "bitcoinCom",
        "displayName": "Bitcoin.com Wallet",
        "avatar": "bitcoin-com-wallet.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitcoin-com-wallet.svg"
      },
      "trustWallet": {
        "key": "trustWallet",
        "displayName": "Trust Wallet",
        "avatar": "trust-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "qrOnly": true,
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/trust-wallet.svg"
      },
      "imToken": {
        "key": "imToken",
        "displayName": "imToken",
        "avatar": "imtoken.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/imtoken.svg"
      },
      "hodlWallet": {
        "key": "hodlWallet",
        "displayName": "HODL Wallet",
        "avatar": "hodl-wallet.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/hodl-wallet.svg"
      },
      "metamask": {
        "key": "metamask",
        "displayName": "MetaMask",
        "avatar": "metamask.svg",
        "uniCode": "https://metamask.app.link/dapp/test.bitpay.com",
        "verificationLink": "https://metamask.app.link/dapp/test.bitpay.com/id/verify",
        "payPro": false,
        "supportedNetworks": [
          "polygon"
        ],
        "currencies": {
          "ETH": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "GUSD": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "PAX": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "USDC": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "BUSD": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          },
          "WBTC": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "WBTC",
            "image": "https://test.bitpay.com/img/icon/currencies/WBTC.svg"
          },
          "SHIB": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "SHIB",
            "image": "https://test.bitpay.com/img/icon/currencies/SHIB.svg"
          },
          "DAI": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "DAI",
            "image": "https://test.bitpay.com/img/icon/currencies/DAI.svg"
          },
          "MATIC_e": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681b"
            },
            "code": "MATIC_e",
            "image": "https://test.bitpay.com/img/icon/currencies/MATIC_e.svg"
          },
          "MATIC": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "MATIC",
            "image": "https://test.bitpay.com/img/icon/currencies/MATIC.svg"
          },
          "ETH_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "ETH_m",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH_m.svg"
          },
          "GUSD_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "GUSD_m",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD_m.svg"
          },
          "PAX_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "PAX_m",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX_m.svg"
          },
          "USDC_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "USDC_m",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC_m.svg"
          },
          "BUSD_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BUSD_m",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD_m.svg"
          },
          "WBTC_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "WBTC_m",
            "image": "https://test.bitpay.com/img/icon/currencies/WBTC_m.svg"
          },
          "SHIB_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "SHIB_m",
            "image": "https://test.bitpay.com/img/icon/currencies/SHIB_m.svg"
          },
          "DAI_m": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "DAI_m",
            "image": "https://test.bitpay.com/img/icon/currencies/DAI_m.svg"
          },
          "APE": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "APE",
            "image": "https://test.bitpay.com/img/icon/currencies/APE.svg"
          },
          "EUROC": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "EUROC",
            "image": "https://test.bitpay.com/img/icon/currencies/EUROC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/metamask.svg"
      },
      "braveBrowser": {
        "key": "braveBrowser",
        "displayName": "Brave Browser",
        "avatar": "brave-browser.svg",
        "payPro": false,
        "currencies": {
          "ETH": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "GUSD": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "PAX": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "USDC": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "BUSD": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/brave-browser.svg"
      },
      "operaBrowser": {
        "key": "operaBrowser",
        "displayName": "Opera Browser",
        "avatar": "opera-browser.svg",
        "payPro": false,
        "currencies": {
          "ETH": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "GUSD": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "PAX": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "USDC": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "BUSD": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/opera-browser.svg"
      },
      "ledgerWallet": {
        "key": "ledgerWallet",
        "displayName": "Ledger Wallet",
        "avatar": "ledger-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "legacyAddress": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/ledger-wallet.svg"
      },
      "coolWallet": {
        "key": "coolWallet",
        "displayName": "CoolWallet",
        "avatar": "coolwallet.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coolwallet.svg"
      },
      "trezorWallet": {
        "key": "trezorWallet",
        "displayName": "Trezor Wallet",
        "avatar": "trezor-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/trezor-wallet.svg"
      },
      "bitcoinCore": {
        "key": "bitcoinCore",
        "displayName": "Bitcoin Core",
        "avatar": "bitcoin-core.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "rbf": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21+"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitcoin-core.svg"
      },
      "dogecoinCore": {
        "key": "dogecoinCore",
        "displayName": "Dogecoin Core",
        "avatar": "doge-logo.svg",
        "payPro": false,
        "currencies": {
          "DOGE": {
            "p2p": true,
            "rbf": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21+"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/doge-logo.svg"
      },
      "bitcoinABC": {
        "key": "bitcoinABC",
        "displayName": "Bitcoin ABC",
        "avatar": "bitcoin-abc.svg",
        "payPro": true,
        "currencies": {
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitcoin-abc.svg"
      },
      "badgerWallet": {
        "key": "badgerWallet",
        "displayName": "Badger Wallet",
        "avatar": "badger-wallet.png",
        "payPro": true,
        "currencies": {
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/badger-wallet.png"
      },
      "greenWallet": {
        "key": "greenWallet",
        "displayName": "Green Wallet",
        "avatar": "green-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/green-wallet.svg"
      },
      "zenGo": {
        "key": "zenGo",
        "displayName": "ZenGo Wallet",
        "avatar": "zengo-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/zengo-wallet.svg"
      },
      "abraWallet": {
        "key": "abraWallet",
        "displayName": "Abra Wallet",
        "avatar": "abra-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/abra-wallet.svg"
      },
      "samouraiWallet": {
        "key": "samouraiWallet",
        "displayName": "Samourai Wallet",
        "avatar": "samourai-wallet.png",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/samourai-wallet.png"
      },
      "wasabiWallet": {
        "key": "wasabiWallet",
        "displayName": "Wasabi Wallet",
        "avatar": "wasabi-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/wasabi-wallet.svg"
      },
      "guardaWallet": {
        "key": "guardaWallet",
        "displayName": "Guarda Wallet",
        "avatar": "guarda-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/guarda-wallet.svg"
      },
      "zapWallet": {
        "key": "zapWallet",
        "displayName": "Zap Wallet",
        "lightning": true,
        "avatar": "zap-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/zap-wallet.svg"
      },
      "binance": {
        "key": "binance",
        "displayName": "Binance",
        "avatar": "binance.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/binance.svg"
      },
      "kraken": {
        "key": "kraken",
        "displayName": "Kraken",
        "avatar": "kraken.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/kraken.svg"
      },
      "poloniex": {
        "key": "poloniex",
        "displayName": "Poloniex",
        "avatar": "poloniex.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/poloniex.svg"
      },
      "bitfinex": {
        "key": "bitfinex",
        "displayName": "Bitfinex",
        "avatar": "bitfinex.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitfinex.svg"
      },
      "okex": {
        "key": "okex",
        "displayName": "OKEx",
        "avatar": "okex.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/okex.svg"
      },
      "bitgo": {
        "key": "bitgo",
        "displayName": "BitGo",
        "avatar": "bitgo.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitgo.svg"
      },
      "bitso": {
        "key": "bitso",
        "displayName": "Bitso",
        "avatar": "bitso.svg",
        "uniCode": "https://bitso.com/wallet",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitso.svg"
      },
      "bitpanda": {
        "key": "bitpanda",
        "displayName": "Bitpanda",
        "avatar": "bitpanda.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitpanda.svg"
      },
      "coinsmart": {
        "key": "coinsmart",
        "displayName": "CoinSmart",
        "avatar": "coinsmart.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinsmart.svg"
      },
      "kucoin": {
        "key": "kucoin",
        "displayName": "KuCoin",
        "avatar": "kucoin.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/kucoin.svg"
      },
      "bittrex": {
        "key": "bittrex",
        "displayName": "Bittrex",
        "avatar": "bittrex.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "0.0005",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "0.001",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "1",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bittrex.svg"
      },
      "bitstamp": {
        "key": "bitstamp",
        "displayName": "Bitstamp",
        "avatar": "bitstamp.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitstamp.svg"
      },
      "luno": {
        "key": "luno",
        "displayName": "Luno",
        "avatar": "luno-exchange.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/luno-exchange.svg"
      },
      "coinfloor": {
        "key": "coinfloor",
        "displayName": "Coinfloor",
        "avatar": "coinfloor.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinfloor.svg"
      },
      "bitmex": {
        "key": "bitmex",
        "displayName": "BitMEX",
        "avatar": "bitmex.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitmex.svg"
      },
      "cexIO": {
        "key": "cexIO",
        "displayName": "CEX.io",
        "avatar": "cex-io.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/cex-io.svg"
      },
      "liquidExchange": {
        "key": "liquidExchange",
        "displayName": "Liquid",
        "avatar": "liquid-exchange.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/liquid-exchange.svg"
      },
      "shapeshift": {
        "key": "shapeshift",
        "displayName": "ShapeShift",
        "avatar": "shapeshift.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "withdrawalFee": "dynamic",
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/shapeshift.svg"
      },
      "bitcoinWalletPolehin": {
        "key": "bitcoinWalletPolehin",
        "displayName": "Bitcoin Wallet by Polehin",
        "avatar": "bitcoin-wallet-polehin.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitcoin-wallet-polehin.svg"
      },
      "freewallet": {
        "key": "freewallet",
        "displayName": "Freewallet",
        "avatar": "freewallet.png",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/freewallet.png"
      },
      "coinText": {
        "key": "coinText",
        "displayName": "CoinText",
        "avatar": "cointext.png",
        "payPro": true,
        "currencies": {
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/cointext.png"
      },
      "equalWallet": {
        "key": "equalWallet",
        "displayName": "Equal Wallet",
        "avatar": "equal-wallet.svg",
        "payPro": false,
        "currencies": {
          "ETH": {
            "p2p": true,
            "dappBrowser": true,
            "walletConnect": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "GUSD": {
            "p2p": true,
            "dappBrowser": true,
            "walletConnect": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "PAX": {
            "p2p": true,
            "dappBrowser": true,
            "walletConnect": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "USDC": {
            "p2p": true,
            "dappBrowser": true,
            "walletConnect": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "BUSD": {
            "p2p": true,
            "dappBrowser": true,
            "walletConnect": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/equal-wallet.svg"
      },
      "blueWallet": {
        "key": "blueWallet",
        "displayName": "BlueWallet",
        "lightning": true,
        "avatar": "bluewallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bluewallet.svg"
      },
      "jaxxLiberty": {
        "key": "jaxxLiberty",
        "displayName": "Jaxx Liberty",
        "avatar": "jaxx-liberty-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/jaxx-liberty-wallet.svg"
      },
      "atomicWallet": {
        "key": "atomicWallet",
        "displayName": "Atomic Wallet",
        "avatar": "atomic-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/atomic-wallet.svg"
      },
      "eidooWallet": {
        "key": "eidooWallet",
        "displayName": "Eidoo Wallet",
        "avatar": "eidoo-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/eidoo-wallet.svg"
      },
      "enjinWallet": {
        "key": "enjinWallet",
        "displayName": "Enjin Wallet",
        "avatar": "enjin-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/enjin-wallet.svg"
      },
      "armoryWallet": {
        "key": "armoryWallet",
        "displayName": "Armory Wallet",
        "avatar": "armory-wallet.png",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/armory-wallet.png"
      },
      "coinomi": {
        "key": "coinomi",
        "displayName": "Coinomi Wallet",
        "avatar": "coinomi-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "DOGE": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "BIP21"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/coinomi-wallet.svg"
      },
      "myceliumWallet": {
        "key": "myceliumWallet",
        "displayName": "Mycelium Wallet",
        "avatar": "mycelium-wallet.png",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/mycelium-wallet.png"
      },
      "electrumWallet": {
        "key": "electrumWallet",
        "displayName": "Electrum Wallet",
        "avatar": "electrum-wallet.png",
        "payPro": true,
        "lightning": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/electrum-wallet.png"
      },
      "electronCash": {
        "key": "electronCash",
        "displayName": "Electron Cash",
        "avatar": "electron-cash-wallet.svg",
        "payPro": true,
        "currencies": {
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/electron-cash-wallet.svg"
      },
      "bitnovo": {
        "key": "bitnovo",
        "displayName": "Bitnovo",
        "avatar": "bitnovo-wallet.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitnovo-wallet.svg"
      },
      "argentWallet": {
        "key": "argentWallet",
        "displayName": "Argent",
        "avatar": "argent-wallet.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/argent-wallet.svg"
      },
      "rainbowWallet": {
        "key": "rainbowWallet",
        "displayName": "Rainbow Wallet",
        "avatar": "rainbow-wallet.png",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/rainbow-wallet.png"
      },
      "statusWallet": {
        "key": "statusWallet",
        "displayName": "Status",
        "avatar": "status-wallet.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/status-wallet.svg"
      },
      "tokenary": {
        "key": "tokenary",
        "displayName": "Tokenary",
        "avatar": "tokenary-wallet.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/tokenary-wallet.svg"
      },
      "alphaWallet": {
        "key": "alphaWallet",
        "displayName": "AlphaWallet",
        "avatar": "alphawallet.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/alphawallet.svg"
      },
      "bancorWallet": {
        "key": "bancorWallet",
        "displayName": "Bancor Wallet",
        "avatar": "bancor-wallet.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/bancor-wallet.svg"
      },
      "ibitcoinSE": {
        "key": "ibitcoinSE",
        "displayName": "iBitcoin.se",
        "avatar": "ibitcoin-se.png",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "p2p": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/ibitcoin-se.png"
      },
      "okcoin": {
        "key": "okcoin",
        "displayName": "OKCoin",
        "lightning": true,
        "avatar": "okcoin.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/okcoin.svg"
      },
      "huobi": {
        "key": "huobi",
        "displayName": "Huobi",
        "avatar": "huobi.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/huobi.svg"
      },
      "xapo": {
        "key": "xapo",
        "displayName": "Xapo",
        "avatar": "xapo.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/xapo.svg"
      },
      "rain": {
        "key": "rain",
        "displayName": "Rain",
        "avatar": "rain.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/rain.svg"
      },
      "bitwala": {
        "key": "bitwala",
        "displayName": "Bitwala",
        "avatar": "bitwala.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/bitwala.svg"
      },
      "changelly": {
        "key": "changelly",
        "displayName": "Changelly",
        "avatar": "changelly.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/changelly.svg"
      },
      "dapper": {
        "key": "dapper",
        "displayName": "Dapper",
        "avatar": "dapper-wallet.png",
        "payPro": false,
        "currencies": {
          "ETH": {
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/dapper-wallet.png"
      },
      "lumiWallet": {
        "key": "lumiWallet",
        "displayName": "Lumi Wallet",
        "avatar": "lumi-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/lumi-wallet.svg"
      },
      "balletWallet": {
        "key": "balletWallet",
        "displayName": "Ballet Wallet",
        "avatar": "ballet-wallet.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/ballet-wallet.svg"
      },
      "zelcore": {
        "key": "zelcore",
        "displayName": "Zelcore",
        "avatar": "zelcore.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "ETH": {
            "payPro": true,
            "qr": {
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/zelcore.svg"
      },
      "blockSettle": {
        "key": "blockSettle",
        "displayName": "BlockSettle",
        "avatar": "block-settle.svg",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/block-settle.svg"
      },
      "localBitcoins": {
        "key": "localBitcoins",
        "displayName": "LocalBitcoins",
        "avatar": "local-bitcoins.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/local-bitcoins.svg"
      },
      "uphold": {
        "key": "uphold",
        "displayName": "Uphold",
        "avatar": "uphold.svg",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/uphold.svg"
      },
      "cryptoCom": {
        "key": "cryptoCom",
        "displayName": "Crypto.com",
        "avatar": "crypto-com.svg",
        "payPro": false,
        "currencies": {},
        "image": "https://test.bitpay.com/img/wallet-logos/crypto-com.svg"
      },
      "strike": {
        "key": "strike",
        "displayName": "Strike",
        "avatar": "strike.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "qr": {
              "type": "BIP21"
            },
            "code": "BTC",
            "p2p": true,
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/strike.svg"
      },
      "litecoinCore": {
        "key": "litecoinCore",
        "displayName": "Litecoin Core",
        "avatar": "ltc-logo.svg",
        "payPro": true,
        "currencies": {
          "LTC": {
            "payPro": true,
            "rbf": true,
            "qr": {
              "type": "BIP21+"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/ltc-logo.svg"
      },
      "eclairMobile": {
        "key": "eclairMobile",
        "displayName": "Eclair Mobile",
        "avatar": "eclairmobile.webp",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/eclairmobile.webp"
      },
      "hexa": {
        "key": "hexa",
        "displayName": "Hexa",
        "avatar": "hexa.png",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/hexa.png"
      },
      "phoenix": {
        "key": "phoenix",
        "displayName": "Phoenix",
        "avatar": "phoenix.jpg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/phoenix.jpg"
      },
      "zeus": {
        "key": "zeus",
        "displayName": "Zeus",
        "avatar": "zeus.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/zeus.svg"
      },
      "muun": {
        "key": "muun",
        "displayName": "Muun",
        "avatar": "muun.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/muun.svg"
      },
      "walletOfSatoshi": {
        "key": "walletOfSatoshi",
        "displayName": "Wallet Of Satoshi",
        "avatar": "walletofsatoshi.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/walletofsatoshi.svg"
      },
      "breez": {
        "key": "breez",
        "displayName": "Breez",
        "avatar": "breez.svg",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/breez.svg"
      },
      "sbw": {
        "key": "sbw",
        "displayName": "SBW",
        "avatar": "sbw.webp",
        "payPro": false,
        "lightning": true,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/sbw.webp"
      },
      "walletConnect": {
        "key": "walletConnect",
        "displayName": "WalletConnect",
        "payPro": false,
        "avatar": "wallet-connect.svg",
        "currencies": {
          "ETH": {
            "code": "ETH",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "EIP681"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "GUSD": {
            "code": "GUSD",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "PAX": {
            "code": "PAX",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "USDC": {
            "code": "USDC",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "BUSD": {
            "code": "BUSD",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          },
          "WBTC": {
            "code": "WBTC",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/WBTC.svg"
          },
          "SHIB": {
            "code": "SHIB",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/SHIB.svg"
          },
          "DAI": {
            "code": "DAI",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/DAI.svg"
          },
          "APE": {
            "code": "APE",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/APE.svg"
          },
          "EUROC": {
            "code": "EUROC",
            "p2p": true,
            "dappBrowser": true,
            "qr": {
              "collapsed": true,
              "type": "ADDRESS"
            },
            "image": "https://test.bitpay.com/img/icon/currencies/EUROC.svg"
          }
        },
        "image": "https://test.bitpay.com/img/wallet-logos/wallet-connect.svg"
      },
      "legacyCopay": {
        "key": "legacyCopay",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "ETH": {
            "payPro": true,
            "qr": {
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "USDC": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "PAX": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "GUSD": {
            "payPro": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          }
        }
      },
      "genericP2P": {
        "key": "genericP2P",
        "payPro": false,
        "currencies": {
          "BTC": {
            "p2p": true,
            "qr": {
              "type": "BIP21+"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "p2p": true,
            "qr": {
              "type": "BIP21+"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "p2p": true,
            "qr": {
              "type": "ADDRESS"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          }
        }
      },
      "genericPayPro": {
        "key": "genericPayPro",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "BCH": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "ETH": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "USDC": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "PAX": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "GUSD": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "BUSD": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          }
        }
      },
      "p2pDisabled": {
        "key": "p2pDisabled",
        "payPro": true,
        "currencies": {
          "BTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BTC",
            "image": "https://test.bitpay.com/img/icon/currencies/BTC.svg"
          },
          "DOGE": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "DOGE",
            "image": "https://test.bitpay.com/img/icon/currencies/DOGE.svg"
          },
          "BCH": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "BCH",
            "image": "https://test.bitpay.com/img/icon/currencies/BCH.svg"
          },
          "XRP": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "XRP",
            "image": "https://test.bitpay.com/img/icon/currencies/XRP.svg"
          },
          "LTC": {
            "payPro": true,
            "qr": {
              "type": "BIP72b"
            },
            "code": "LTC",
            "image": "https://test.bitpay.com/img/icon/currencies/LTC.svg"
          },
          "ETH": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681"
            },
            "code": "ETH",
            "image": "https://test.bitpay.com/img/icon/currencies/ETH.svg"
          },
          "USDC": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "USDC",
            "image": "https://test.bitpay.com/img/icon/currencies/USDC.svg"
          },
          "PAX": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "PAX",
            "image": "https://test.bitpay.com/img/icon/currencies/PAX.svg"
          },
          "GUSD": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "GUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/GUSD.svg"
          },
          "DAI": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "DAI",
            "image": "https://test.bitpay.com/img/icon/currencies/DAI.svg"
          },
          "WBTC": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "WBTC",
            "image": "https://test.bitpay.com/img/icon/currencies/WBTC.svg"
          },
          "SHIB": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "SHIB",
            "image": "https://test.bitpay.com/img/icon/currencies/SHIB.svg"
          },
          "BUSD": {
            "payPro": true,
            "dappBrowser": true,
            "qr": {
              "type": "EIP681b"
            },
            "code": "BUSD",
            "image": "https://test.bitpay.com/img/icon/currencies/BUSD.svg"
          }
        }
      }
    }
  }