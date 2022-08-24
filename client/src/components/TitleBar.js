import '../styles/titlebar.scss';
import { Button } from './Button';
// import { useUser } from '../contexts/user';
import { IconButton } from './Icon';
import { Modal } from './Modal';
import { Show, createSignal } from 'solid-js';

export const TitleBar = (props) => {
  return (
    <header id='titlebar'>
      <div class='container justify-content-start'>
        <span class='logo'>bitpay</span>
      </div>
      <div class='container justify-content-center'></div>
      <div class='container justify-content-end'></div>
    </header>
  )
}