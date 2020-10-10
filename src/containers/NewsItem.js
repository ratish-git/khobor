import React,{Component} from 'react';
import { connect } from 'react-redux'
import {getFood} from '../actions';
import PropTypes from 'prop-types';
import Recipe from '../components/recipeListing'

class NewsItem extends Component {

    componentDidMount(){
        this.props.dispatch(getFood())
    }

    render(){
        return(
            <div>
                <Recipe foodData={this.props.recipe}></Recipe>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(">>111>>",state.recipe)
    return{
        recipe:state.recipe
    }
}

NewsItem.protoTypes={
    dispatch:PropTypes.func
}

NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;