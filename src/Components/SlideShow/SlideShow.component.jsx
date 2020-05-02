import React,{Component} from 'react';
import Icon from '@iconify/react';
import bxMouse from '@iconify/icons-bx/bx-mouse';
import Img from 'react-image';
import "./SlideShow.style.css";
// All images has the same ratio of 1.05 to 1

import Image1 from "./images/slideshow-image-1.png";
import Image2 from "./images/slideshow-image-2.png";
import Image3 from "./images/slideshow-image-3.png";


class SlideShow extends Component {
    constructor() {
        super();
        this.state = this.slides[0];

    }

    slides = [
        {
            header : "20% Off Winter Outfits For Men",
            paragraph : "Check out our newest collection for 2020 male outfits",
            primaryColor : "rgb(252, 249, 240)",
            secondaryColor : "rgb(244,208,120)",
            alignment : "left",
            image: Image1
        },
        {
            header : "New Summer Collection",
            paragraph : "The new summer collection cloths for men and women",
            primaryColor : "#e7d1d1",
            secondaryColor : "#e76b69",
            alignment : "right",
            image: Image2

        },
        {
            header : "Best Children Fashion Ever",
            paragraph : "Our fashion isn't exclusive for adults",
            primaryColor : "#d1dce7",
            secondaryColor : "#6988ea",
            alignment : "left",
            image:Image3

        }
    ]

    preloadImages = this.slides.map(slide => slide.image);

    componentDidMount() {
        let i = 0;
        let currentSlide;

        setInterval(() => {
            if(i === this.slides.length - 1) {
                i = -1;
            }
            currentSlide = this.slides[++i];
            this.setState(currentSlide)
        }, 5000);

    }




    render() {

        const image = this.state.image;

        return (
        <div className={`slide-show alignment-${this.state.alignment}`} style={{backgroundColor:this.state.primaryColor}}> 
            <div className='text-content'>
                <h1>{this.state.header}</h1>
                <p style={{color:this.state.secondaryColor}}>{this.state.paragraph}</p>
                <button>Shop Now</button>    
            </div>
            <div className='slide-image'>
                <Img className='display-image' src={image}/>
                <Img className='background-image' src={image}/>    
            </div>
            <div className='loading-bar'></div>
            <Icon className='icon-mouse' icon={bxMouse}/>
  
        </div>
        )
    }
}
export default SlideShow;