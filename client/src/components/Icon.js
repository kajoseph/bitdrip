import '../styles/icon.scss';
import '@fortawesome/fontawesome-free/js/all';
import { getParentElement } from '../lib/utils';

export const Icon = (props) => {
  const { icon, class: className, ...other } = props;
  return (
    <div class={`${className || ''}`} {...other}>
      <i class={`fa-solid fa-${icon}`}></i>
    </div>
  )
}

export const IconButton = (props) => {
  const { href, onClick, ...other } = props;

  const handleClick = (evt) => {
    const div = getParentElement(evt.target, 'div');
    div.classList.add('icon-btn');
    setTimeout(() => {
      div.classList.remove('icon-btn');
    }, 200)

    if(onClick && typeof onClick === 'function') {
      onClick(evt);
    }
  }

  if (href) {
    return (
      <a href={`#${href}`} onClick={handleClick}>
        <Icon {...other} />
      </a>
    )
  } else {
    return (
      <Icon {...other} onClick={handleClick} />
    )
  }
}