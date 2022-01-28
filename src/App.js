import './App.css';
import { useState } from 'react';
import IsClosed from './IsClosed';
import IsOpen from './IsOpen';

function App() {
  const [cthulhuSize, setCthulhuSize] = useState(1);
  const [spaghettiSize, setSpaghettiSize] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  // const [monsterParade, setMonsterParade] = useState('pink', 'orange', 'cyan');

  const cSizeRefactor = (cthulhuSize * 5) + 45;
  const sSizeRefactor = (spaghettiSize * 5) + 45;

  const cthulhuStyle = {
    width: `${cSizeRefactor}px`
  };

  const spaghettiStyle = {
    width: `${sSizeRefactor}px`
  };

  return (
    <div className='zoo'>
      <section className='tentacle-battle'>
        <div className='monster-holder'>
          <img style={cthulhuStyle} className='cthulhu' src='/cthulhu.png'/>
          <div className='monster-buttons'>
            <button className='make-strong' onClick={() => setCthulhuSize(cthulhuSize + 1)}>Make Stronger</button>
            <button className='attack-enemy' onClick={() => setSpaghettiSize(spaghettiSize - 1)}>Attack Enemy</button>
          </div>
          <h2 className='monster-name'>CtHuLhU</h2>
        </div>
        <div className='monster-holder'>
          <img style={spaghettiStyle} className='spaghetti' src='/spaghetti.png'/>
          <div className='monster-buttons'>
            <button className='make-strong' onClick={() => setSpaghettiSize(spaghettiSize + 1)}>MaKe StRoNgEr</button>
            <button className='attack-enemy' onClick={() => setCthulhuSize(cthulhuSize - 1)}>AtTaCk EnEmY</button>
          </div>
          <div className='monster-name'>SpAgHeTtI mOnStAr</div>
        </div>
      </section>
      <section className='on-off-container'>
        <div className='sign-container'>
          <IsOpen open={isOpen} />
          {/* <div className='open'>OPEN</div> */}
          <IsClosed closed={isClosed} />
          {/* <div className='closed on'>CLOSED</div> */}
        </div>
        <div className='button-container'>
          <button className='open-button' onClick={() => {setIsOpen(true); setIsClosed(false);}}>open</button>
          <button className='closed-button' onClick={() => {setIsOpen(false); setIsClosed(true);}}>closed</button>
        </div>
      </section>
      <section className='monster-parade'>
        <div className='parade-div'></div>
        <div className='button-div'>
          <button className='cyan'></button>
          <button className='green'></button>
          <button className='orange'></button>
          <button className='pink'></button>
          <button className='red'></button>
          <button className='yellow'></button>
        </div>
      </section>
    </div>
  );
}

export default App;
