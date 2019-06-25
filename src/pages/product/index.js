import React, {Component} from 'react';
import api from '../../services/api';

export default class Product extends Component {

    state = {
        product: {}
    };

    async componentDidMount(){

        const {id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState({product: response.data});
    }
    render(){

        const { product } = this.state;

        return(
            <div className="product-info">
            <h1>{Product.title}</h1>
            <p>{Product.description}</p>

            <p>
                URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }

}