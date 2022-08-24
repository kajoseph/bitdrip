import { Portal } from 'solid-js/web';
import { Icon } from './Icon';
import '../styles/modal.scss';

export const Modal = (props) => {
  return (
    <Portal mount={document.getElementById(props.id || (Math.random() * 100000000000000).toFixed(2) )}>
      <div class='modal justify-content-center'>
        <div class='flex-column justify-content-center'>
          <div class='container flex-column'>
            <div class='header flex-row pad-10'>
              <div class='justify-content-center flex-grow'>{props.title}</div>
              <div class='justify-content-end pointer' onclick={props.onClose}><Icon icon='times' /></div>
            </div>
            <div class='content pad-20 height-100'>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}