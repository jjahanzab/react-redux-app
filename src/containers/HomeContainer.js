import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../services/actions/actions';
import Home from "../components/Home";

const mapStateToProps = (state) => {
    return {
        // items: state?.cartReducer
    }
}

const mapDispathToProps = dispatch => {
    return {
        addToCartHandler : (data) => {
            dispatch(addToCart(data))
        },
        removeToCartHandler : () => {
            dispatch(removeToCart())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Home);