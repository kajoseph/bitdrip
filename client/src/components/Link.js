export const Link = (props) => {
  return (
    <a href={`#${props.href || props.to}`} class={props.class || ''}>{props.children}</a>
  )
}