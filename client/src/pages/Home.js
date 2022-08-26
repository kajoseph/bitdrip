import { Button } from '../components/Button';
import { SideBar } from '../components/SideBar';
import '../styles/home.scss';

export const Home = (props) => {
  return (
    <div id='home-page' class='flex-column justify-content-center flex-grow'>
      <div class='flex-row justify-content-center'>
        <div class='flex-column'>
          <h1 style='font-weight:normal;margin:0;'>Welcome to <span style='font-family: Ubuntu; font-weight:bold;'>bitdrip</span></h1>
          <h2 style='font-weight:normal;margin:0;'>a faucet by <span style='font-family: Ubuntu; font-weight:bold;'>bitpay</span></h2>
        </div>
      </div>
    </div>
  )
}