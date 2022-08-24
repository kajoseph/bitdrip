import { createSignal, onCleanup, createContext, useContext } from 'solid-js';

const RouterContext = createContext();

export const Router = (props) => {
  const getHash = () => {
    let hash = window.location.hash;
      if (hash[0] === '#') {
        hash = hash.slice(1);
      }
      if (hash[0] === '/') {
        hash = hash.slice(1);
      }
      return hash;
  }
  const [location, setLocation] = createSignal(getHash() || props.init);
  const [read, triggerParams] = createSignal();
  const locationHandler = () => setLocation(getHash());
  let params;
  
  window.addEventListener('hashchange', locationHandler);
  onCleanup(() => window.removeEventListener('hashchange', locationHandler));
  
  const store = {
    location,
    matches: (name, test) => {
      const loc = location().split('?')[0];
      const queryString = location().substring(loc.length);
      const queryArr = queryString.slice(1).split('&')
      const queryObj = {};
      for (let pair of queryArr) {
        const key = pair.split('=')[0];
        const val = pair.substring(key.length + 1);
        queryObj[key] = val;
      }
 
      const match = test.test(loc);

      if (match) {
        params = { params: loc.replace(match[0], '').split('/').slice(1), routeName: name, queryString, query: queryObj };
        triggerParams();
      }
      return !!match;
    },
    getParams: () => (read(), params)
  };

  return (
    <RouterContext.Provider value={store}>
      {props.children}
    </RouterContext.Provider>
  )
}

export const useRouterContext = () => useContext(RouterContext);