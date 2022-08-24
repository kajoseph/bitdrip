import { createContext, onMount, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { fetchFaucets } from '../api/faucet';

const SiteContext = createContext({});

export function SiteProvider (props) {
  const [state, setState] = createStore({ faucets: [], isInitialized: false });
  const store = [
    state,
    {
      getFaucets: () => {
        fetchFaucets()
          .then(faucets => {
            console.log('loaded faucets', faucets);
            setState('faucets', faucets.data || []);
          })
          .catch(err => console.error(err));
      }
    }
  ];

  onMount(() => {
    store[1].getFaucets();
  });
  
  return (
    <SiteContext.Provider value={store}>
      {props.children}
    </SiteContext.Provider>
  );
}

export const useSiteContext = () => useContext(SiteContext);