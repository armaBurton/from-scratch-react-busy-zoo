import Parade from './Parade';

export default function RenderMonsterArr(props){
  return props.monsterParade.map((monster, i) => 
    <Parade key={monster + i} monster={monster} />
  );

}
