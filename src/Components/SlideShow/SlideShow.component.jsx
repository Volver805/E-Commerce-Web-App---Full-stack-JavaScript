import React,{Component} from 'react';
import "./SlideShow.style.css";
// All images has the same ratio of 1.05 to 1
/* Development Notes
    1) Try use React Image Component
    2) Button unclickable because image above it , Fix that! 
*/
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

    // The reason why images are stored together inside an array is to avoid the delay in rendering images that I've experienced when I stored the images inside of the slide object 

    images = [Image1,Image2,Image3]

    componentDidMount() {
        let i = 0;
        let currentSlide;
        document.getElementById(`image-${i}`).classList.add('slide-image-active') ;

        setInterval(() => {
            document.getElementById(`image-${i}`).classList.remove('slide-image-active');
            if(i === this.slides.length - 1) {
                i = -1;
            }
            currentSlide = this.slides[++i];
            document.getElementById(`image-${i}`).classList.add('slide-image-active') ;

            this.setState(currentSlide)
        }, 5000);

    }


    render() {
        let renderedImages = this.images.map((image,index) => {
            return <div className='slide-image' key={index} id={`image-${index}`}>
                <img className='display-image' src={image} alt=''></img>
                <img className='background-image' src={image} alt=''></img> 
            </div>
        })

        return (
        <div className={`slide-show alignment-${this.state.alignment}`} style={{backgroundColor:this.state.primaryColor}}> 
            <div className='text-content'>
                <h1>{this.state.header}</h1>
                <p style={{color:this.state.secondaryColor}}>{this.state.paragraph}</p>
                <button>Shop Now</button>    
            </div>
            {renderedImages}
            <div className='loading-bar'></div>
        </div>
        )
    }
}
export default SlideShow;