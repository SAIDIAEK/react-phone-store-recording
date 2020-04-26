import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    var urlcourante = document.location.href;
                                    var queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
                                    //console.log(queue_url);                                    
                                    return value.products.map( product => {
                                        return ((product.categorie === queue_url) && (<Product key={product.id} 
                                                        product={product} 
                                                />))||
                                                ((queue_url === "") && (<Product key={product.id} 
                                                    product={product} 
                                            />))
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
