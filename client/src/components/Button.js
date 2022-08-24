import '../styles/button.scss';

export const Button = (props) => {
  const a = document.createElement('a');
  
  const onClick = ({ target }) => {
  
    target.classList.add('icon-btn');
    setTimeout(() => {
      target.classList.remove('icon-btn');
    }, 200)

  
    if (props.to) {
      let redirect = '';
      if (props.redirect) {
        const hash = window.location.hash;
        let start = hash.indexOf('?redirect=');
        if (start) {
          redirect += hash.substring(start + 1);
        } else {
          start = hash.indexOf('&redirect='); // redirect param should always be at the end in case the redirect also has params
          if (start) {
            redirect += hash.substring(start + 1);
          }
        }
      }
      a.href = `#${props.to}` + (props.redirect ? `?${redirect}` : '');
      a.click();
    }

    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <div class={`btn ${props.class || ''}`} style={props.style || ''}>
      <button type={props.type || 'button'} onClick={onClick} disabled={props.disabled}>
        {props.children || props.text}
      </button>
    </div>
  )
}