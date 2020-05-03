import React from 'react';

const Category = props => {
    return <div className={`category-col-${props.category.col}`} style={{backgroundColor:props.category.color}}>
        <div className="wrapper">
            <p className='category-name'>{props.category.name}</p>
            <p className='category-description'>{props.category.description}</p>
            <button className='black-button'>Up to {props.category.discount}% discount</button> 
        </div>
        <img src={props.category.image}/>
    </div>
}

export default Category;