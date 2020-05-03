import React from 'react';
import SlideShow from './Components/SlideShow/SlideShow.component';
import Navbar from './Components/Navbar/Navbar.component';
import RecommendedCategories from './Components/Recommended/RecommendedCategories.component';

import './main.style.css';

const App = ()=> {
  return <div>
    <Navbar/> 
    <SlideShow /> 
    <RecommendedCategories />
  </div>
}
export default App;