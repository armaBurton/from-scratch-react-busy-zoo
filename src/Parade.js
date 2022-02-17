export default function Parade({ monster }) {

  return <>
    <img className='monster' alt={`${monster} monster`} src={`/${monster}.png`} />
  </>;
}
