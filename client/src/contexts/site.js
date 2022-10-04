import { createContext, onMount, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { fetchFaucets } from '../api/faucet';
import { fetchSiteData } from '../api/site';

const SiteContext = createContext({});

export function SiteProvider (props) {
  const [state, setState] = createStore({
    isInitialized: false,
    faucets: [],
    siteData: {}
  });
  const store = [
    state,
    {
      getFaucets: () => {
        return fetchFaucets()
          .then(response => {
            console.log('loaded faucets', response);
            setState('faucets', response.data || []);
          })
          .catch(err => console.error(err));
      },

      getSiteData: () => {
        return fetchSiteData()
          .then(response => {
            setState('siteData', response.data || {});
            window.BITDRIP_API_HOST = response.data.apiHost;
            if (response.data.apiPort) {
              window.BITDRIP_API_HOST += ':' + response.data.apiPort;
            }
          })
          .catch(err => console.error(err));
      }
    }
  ];

  onMount(() => {
    store[1].getSiteData()
    .then(store[1].getFaucets);
  });
  
  return (
    <SiteContext.Provider value={store}>
      {props.children}
    </SiteContext.Provider>
  );
}

export const useSiteContext = () => useContext(SiteContext);