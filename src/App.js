import React from 'react';
import SlideShow from './Components/SlideShow/SlideShow.component';
import Navbar from './Components/Navbar/Navbar.component';
import TopProducts from './Components/TopProducts/TopProducts.component';

import './main.style.css';

const App = ()=> {
  return <div>
    <Navbar/> 
    <SlideShow /> 
    <TopProducts />
  </div>
}
export default App;