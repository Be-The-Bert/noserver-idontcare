import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateList, updateListTitle } from './../../../ducks/actions';

import EditItem from './../../Moduls/EditItem/EditItem'; 

class ListDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: false,
            titleInput: '',
            editItem: false,
            restaurantToEdit: {
                index: 0
            }            
        }
        this.editItem = this.editItem.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.saveTitleChanges = this.saveTitleChanges.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }
    handleTitleChange(e) {
        this.setState(Object.assign({}, this.state, {titleInput: e.target.value}))
    }
    // SAVE LIST TITLE 
    saveTitleChanges(e) {
        e.preventDefault();
        this.props.updateListTitle(this.state.titleInput, this.props.currentList);
        this.setState(Object.assign({}, this.state, {editTitle: false, titleInput: ''}));
    }
    // DISPLAY EDIT MODULE
    editItem(index) {
        let temp = Object.assign({}, this.props.lists[this.props.currentList].restaurants[index], {index});
        this.setState(Object.assign({}, this.state, {editItem: true, restaurantToEdit: temp}))
    }
    // EDIT MODULE CALLBACKS
    cancelChanges() {
        this.setState(Object.assign({}, this.state, {editItem: false, restaurantToEdit: {index: 0}}))
    }
    deleteRestaurant(index) {
        let resArrayCopy = this.props.lists[this.props.currentList].restaurants.slice();
        let updatedCopy = resArrayCopy.splice(index, 1);
        this.props.updateList(updatedCopy, this.props.currentList);
        this.setState(Object.assign({}, this.state, {editItem: false}))
    }
    saveChanges(index, name, type, price) {
        let updatedRestaurant = {name, type, price};
        let resArrayCopy = this.props.lists[this.props.currentList].restaurants.slice();
        resArrayCopy.splice(index, 1, updatedRestaurant);
        this.props.updateList(resArrayCopy, this.props.currentList);
        // console.log(this.props.lists);
        this.setState(Object.assign({}, this.state, {editItem: false, restaurantToEdit: {index: 0}}))
    }
    render(){
        const id = this.props.currentList
        return (
            <div id='ListDisplay'>
                
                    {this.state.editTitle 
                    ?
                        <form>
                            <input value={this.state.titleInput} onChange={this.handleTitleChange}></input>
                            <button onClick={(e) => this.saveTitleChanges(e)}>Save</button>
                        </form>
                    :   
                        <h4 className='listTitle' onClick={() => this.setState(Object.assign({}, this.state, {editTitle: true}))}>{this.props.lists[this.props.currentList].title}</h4>
                    }
                    {this.props.lists[id].restaurants.map( (item, i) => {
                        return ( 
                        <div className='restaurantList' key={i}>
                            <div className='restaurantContainer'>
                                <h5>{item.name}</h5>
                                <p>{item.type}</p>
                                <p>{item.price}</p>
                            </div>
                            <button onClick={() => this.editItem(i)}>Edit</button>
                        </div>
                        )}
                    )}
                   
                {/*EDIT ITEMS MODUL*/}
                {this.state.editItem
                ?
                    <EditItem restaurantToEdit={this.state.restaurantToEdit} cancelChanges={this.cancelChanges} deleteRestaurant={this.deleteRestaurant} saveChanges={this.saveChanges}/>
                :
                    null
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists,
        currentList: state.currentList
    }
}
export default connect(mapStateToProps, { updateList, updateListTitle })(ListDisplay);