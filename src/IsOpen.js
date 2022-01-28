export default function IsOpen(props) {
  return <>
    <div className={props.open === true ? `open on` : `open`}>OPEN</div>
  </>;
}
