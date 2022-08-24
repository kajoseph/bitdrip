import { Switch, Match } from 'solid-js';
import { Router, useRouterContext } from './contexts/router';
// import { UserProvider } from './contexts/user';
// import { Auth } from './pages/Auth';
// import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { SideBar } from './components/SideBar';
// import { Dashboard } from './pages/Dashboard';
// import { ScheduleProvider } from './contexts/schedule';
import { SiteProvider } from './contexts/site';
import { Faucet } from './pages/Faucet';
// import { AddressProvider } from './contexts/address';

export const App = () => {
  return <div class='App'>
    <SiteProvider>
    <Router init=''>
      <div class='App-Body flex-row'>
      <SideBar />
        {() => {
          const { matches, getParams } = useRouterContext();
          return (
            <Switch>
              {/* <Match when={matches('login', /^login/)}><Auth {...getParams()} /></Match>
              <Match when={matches('register', /^register/)}><Auth {...getParams()} /></Match>
              <Match when={matches('profile', /^profile/)}><Profile {...getParams()} /></Match>
              <Match when={matches('dashboard', /^dashboard/)}><Dashboard {...getParams()} /></Match> */}
              <Match when={matches('faucet', /^.+/)}><Faucet {...getParams()} /></Match>
              <Match when={matches('', /^#?$/)}><Home {...getParams()} /></Match>
            </Switch>
          )
        }}
      </div>
    </Router>
    </SiteProvider>
  </div>
};
