import { createSignal } from 'solid-js';
import '../styles/input.scss';
import { IconButton } from './Icon';


export const Input = (props) => {
  const [showPassword, toggleShowPassword] = createSignal(false);

  const {
    class: className = '',
    type,
    children,
    placeholder = '',
    value = '',
    autofocus,
    label,
    onChange,
    ...other
  } = props;
  
  const _id = (Math.random() * 100000000000000).toFixed(0);
  return (
    <div class={`input ${className}${type === 'textarea' ? ' textarea' : ''} ${props.disabled ? 'disabled' : ''}`} {...other}>
      {label && <label for={_id}>{label}</label>}
      {type === 'textarea' ?
        <textarea class='textarea' placeholder={placeholder} value={value} autofocus={autofocus} id={_id} onchange={onChange}>{children}</textarea>
        :
        <div class='flex-row'>
          <input
            type={showPassword() ? 'text' : type}
            placeholder={props.placeholder}
            value={props.value}
            autofocus={autofocus}
            onfocusout={props.onfocusout}
            onfocus={props.onfocus}
            onchange={onChange}
            id={_id}
            disabled={props.disabled}
            min={props.min}
            max={props.max}
            step={props.step}
          />
          {type === 'password' && <IconButton icon='eye' class='show-hide' onClick={() => toggleShowPassword(!showPassword())} />}
        </div>
      }
    </div>
  );
}