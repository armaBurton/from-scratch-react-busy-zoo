export default function IsOpen(props) {
  return <>
    <div className={props.open === true ? `open on glow-green` : `open`}>OPEN</div>
  </>;
}
