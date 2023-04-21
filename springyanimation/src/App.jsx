
import land from './land.jpeg';
import moon from './moon.jpeg';
import cat from './cat.gif';

import { parallax,parallaxlayer } from '@react-spring/parallax';
function App(){
  const ref= useRef();
  
  return(
    <div>
      <parallax pages={4} ref ={ref}>

      </parallax>
      <parallax pages={4}>
        <parallaxlayer 
        offset={0}
         speed = {1}
         factor={2}
         style={{
          backgroundimage:`url(${moon})`,
          backgroundSize: 'cover',
         }}></parallaxlayer>

         <parallaxlayer
         sticky={{ start: 0.9,end: 2.5 }}
         >
          <img src={cat}/>
         </parallaxlayer>


        <parallaxlayer 
        offset={1}
         speed = {1.5}
         factor={2}
         style={{
          backgroundimage:`url(${land})`,
          backgroundSize: 'cover',
         }}></parallaxlayer>
         <parallaxlayer
         offset={0.2}
         speed={0.05}
         onclick={() =>ref.current.scrollTo(3)}>
          <h3>Repeated Links</h3>
        </parallaxlayer>
        <parallaxlayer
        offset={3.2}
        speed={2}>
          <h3>Only Linux</h3>
        </parallaxlayer>
      </parallax>
    </div>
  )
}
export default App;