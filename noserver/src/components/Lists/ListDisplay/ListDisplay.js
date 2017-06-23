import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateList, updateListTitle } from './../../../ducks/actions';

import EditItem from './../../Moduls/EditItem/EditItem'; 

class ListDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: false,
            titleInput: this.props.lists[this.props.match.params.id].title,
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
    saveTitleChanges() {
        this.props.updateListTitle(this.state.titleInput, this.props.match.params.id);
        this.setState(Object.assign({}, this.state, {editTitle: false, titleInput: this.props.lists[this.props.match.params.id].title}));
    }
    // DISPLAY EDIT MODULE
    editItem(index) {
        let temp = Object.assign({}, this.props.lists[this.props.match.params.id].restaurants[index], {index});
        this.setState(Object.assign({}, this.state, {editItem: true, restaurantToEdit: temp}))
    }
    // EDIT MODULE CALLBACKS
    cancelChanges() {
        this.setState(Object.assign({}, this.state, {editItem: false, restaurantToEdit: {index: 0}}))
    }
    deleteRestaurant(index) {
        let resArrayCopy = [...this.props.lists[this.props.match.params.id].restaurants];
        resArrayCopy.splice(index, 1);
        this.setState(Object.assign({}, this.state, {restaurants: resArrayCopy, editItem: false}))
    }
    saveChanges(index, name, type, price) {
        let updatedRestaurant = {name, type, price};
        let resArrayCopy = this.props.lists[this.props.match.params.id].restaurants.slice();
        resArrayCopy.splice(index, 1, updatedRestaurant);
        this.props.updateList(resArrayCopy, this.props.match.params.id);
        // console.log(this.props.lists);
        this.setState(Object.assign({}, this.state, {editItem: false, restaurantToEdit: {index: 0}}))
    }
    render(){
        const id = this.props.match.params.id
        return (
            <div>
                <div>
                    {this.state.editTitle 
                    ?
                        <div>
                            <input value={this.state.titleInput} onChange={this.handleTitleChange}></input>
                            <button onClick={this.saveTitleChanges}>Save</button>
                        </div>
                    :   
                        <span onClick={() => this.setState(Object.assign({}, this.state, {editTitle: true}))}>{this.state.titleInput}</span>
                    }
                    {this.props.lists[id].restaurants.map( (item, i) => {
                        return ( 
                        <div key={i}>
                            <span>{item.name}</span>
                            <span>{item.type}</span>
                            <span>{item.price}</span>
                            <button onClick={() => this.editItem(i)}>Edit</button>
                        </div>
                        )}
                    )}
                </div>
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
        lists: state.lists
    }
}
export default connect(mapStateToProps, { updateList, updateListTitle })(ListDisplay);