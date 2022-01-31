import { connect } from 'react-redux';
import Header from "../components/Header";

const mapStateToProps = (state) => {
    return {
        items: state?.cartReducer
    }
}

const mapDispathToProps = dispatch => {
    return {
        // items: state?.cartReducer
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);