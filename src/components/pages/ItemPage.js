import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import WithRestoService from '../hoc';
import Error from '../error';
import Spinner from '../spinner';

import './itemPage.scss';

class ItemPage extends Component{

    componentDidMount(){

        if (this.props.menuItems.length ===0){

            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
            .then(res=>this.props.menuLoaded(res))
            .catch(error=>this.props.menuError())
        }

    }


    render(){

        const {menuItems, loading, error,onAddToCart} = this.props;

        if (loading){
            return <Spinner/>
        }

        if (error){
            return <Error/>
        }

        const item = menuItems.find(elem=> elem.id === +this.props.match.params.id)
        const {title,url,category,price,id} = item;

        return(
            <div className='item-page'>
                <li  key={id} className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">{category}: <span>salads</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn" onClick={()=>onAddToCart(id)}>Add to cart</button>
            </li>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}


export default WithRestoService()(connect(mapStateToProps, actions)(ItemPage));
