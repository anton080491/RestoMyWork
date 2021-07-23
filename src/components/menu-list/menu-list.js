import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import * as actions from '../../actions';
import Error from '../error';
import Spinner from '../spinner';


import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        this.props.menuRequested();

        const {RestoService} = this.props;

        RestoService.getMenuItems()
        .then(items => this.props.menuLoaded(items))
        .catch(error=> this.props.menuError())

    }

    render() {

        const {menuItems, error,loading,onAddToCart} = this.props;

        if (loading){
            return <Spinner/>
        }

        if (error){
            return <Error/>
        }

         const items = menuItems.map(menuItem=>{
            return (
                    <MenuListItem key={menuItem.id}  menuItem={menuItem} onAddToCart={()=>onAddToCart(menuItem.id)}/>
            )
         })

        return (
            <View items={items}/>
        )
    }
};

const View =({items})=>{
    return(
        <ul className="menu__list">
            {items}
        </ul>
    )
}

const mapStateToProps=(state)=>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

// const mapDispatchToProps={
//     menuLoaded, menuRequested, menuError 
// }

export default WithRestoService()(connect(mapStateToProps,actions)(MenuList));