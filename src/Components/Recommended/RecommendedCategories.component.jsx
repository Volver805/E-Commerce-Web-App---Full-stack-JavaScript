import React,{Component} from 'react';
import shoes from './shoes.png';
import Category from './Category.component';
import './recommended.scss';

class RecommendedCategories extends Component {

    categories = [ 
        
        {
            name:"Shoes & Sneakers",
            description:"Check our footwear collection",
            discount:25,
            image:shoes,
            color:'#EEBEBE',
            col:3
        },
        {
            name:"Sunglasses & Eye wear",
            description:"Fashion Shades & Glasses",
            discount:25,
            image:null,
            color:'#FFF3D8',
            col:3
        },
        {
            name:"Hoodies",
            description:"Designer",
            discount:25,
            image:null,
            color:'#A8BF7B',
            col:2
        },
        {
            name:"T-Shirts",
            description:"Designer",
            discount:25,
            image:null,
            color:'#D7E2FE',
            col:2
        },
        {
            name:"Jeans",
            description:"Designer",
            discount:25,
            image:null,
            color:'#7BBFB3',
            col:2
        }
    ]

    render() {

        const renderedCategories = this.categories.map(category => <Category category={category}/>);

        return (
        <div className='recommended-categories'>
            <div className='title'>            
                <h1>Recommended Categories</h1>
                <div className='line'></div>
                <div className='categories'>
                    {renderedCategories}
                </div>
            </div>
        </div>
        )
    }
}

export default RecommendedCategories;