import React from 'react'
import ProductList from '../products/ProductList'
import { getProducts } from '../service/service'

class Home extends React.Component {

    state = {products: []}

    componentDidMount() {
        async function fetch(){
            let response = await getProducts.getAllProducts()
            console.log(response.data);
            this.setState({products: response.data})
        }
        fetch()
    }
    

    render() {
        return (
            <div>
                <ProductList products={this.state} />
            </div>
        )
    }
}

export default Home;
