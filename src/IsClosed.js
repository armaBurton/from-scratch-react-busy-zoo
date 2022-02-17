export default function IsClosed(props) {
  return <>
    <div title="closed" className={props.closed === true ? `closed on glow-red` : `closed`}>CLOSED</div>
  </>;
}
