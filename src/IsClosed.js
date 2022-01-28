export default function IsClosed(props) {
  return <>
    <div className={props.closed === true ? `closed on glow-red` : `closed`}>CLOSED</div>
  </>;
}
