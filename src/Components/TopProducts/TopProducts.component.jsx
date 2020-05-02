import React,{Component} from 'react';
import './TopProducts.scss';

class TopProducts extends Component {
    render() {
        return (
        <div className='top-products'>
            <div className='title'>            
                <h1>Top Selling</h1>
                <div className='line'></div>
            </div>
        </div>
        )
    }
}

export default TopProducts;