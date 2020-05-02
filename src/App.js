import React from 'react';
import Icon from '@iconify/react';
import bxMouse from '@iconify/icons-bx/bx-mouse';
import SlideShow from './Components/SlideShow/SlideShow.component';
import Navbar from './Components/Navbar/Navbar.component';

import './main.style.css';

const App = ()=> {
  return <div>

  <Navbar/> 
  <SlideShow /> 
  <Icon className='icon-mouse' icon={bxMouse}/>
  </div>
}
export default App;