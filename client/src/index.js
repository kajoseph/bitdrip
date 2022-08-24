import { render } from 'solid-js/web';
import './styles/theme.scss';
import './styles/global.scss';
import { App } from './App';
// import * as serviceWorker from './serviceWorker';

// render(App, document.getElementById('root'));
render(() => <App />, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
