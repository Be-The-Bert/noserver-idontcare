import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newList } from './../../ducks/actions';

import EditItem from './../Moduls/EditItem/EditItem';

class MakeAList extends Component {
    constructor(){
        super();
        this.state = {
            titleInput: 'List Title',
            restaurantsInput: 'Restaurant Name',
            title: '',
            restaurants: [],
            editTitle: true,
            editItem: false,
            restaurantToEdit: {
                index: 0
            }
        }
        // BINDING METHOD FUNCTIONS CONTEXT
        this.saveTitle = this.saveTitle.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.addRestaurant = this.addRestaurant.bind(this);
        this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
        this.saveList = this.saveList.bind(this);
        this.editItem = this.editItem.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }
    // INPUT CHANGE FUNCTIONS
    handleTitleChange(e) {
        this.setState(Object.assign({}, this.state, {titleInput: e.target.value}));
    }
    saveTitle(e) {
        e.preventDefault();
        let temp = this.state.titleInput;
        this.setState(Object.assign({}, this.state, {title: temp, editTitle: false}));
    }
    handleRestaurantChange(e) {
        this.setState(Object.assign({}, this.state, {restaurantsInput: e.target.value}));
    }
    // ADD RESTAURANT TO NEW LIST
    addRestaurant(e) {
        e.preventDefault();
        let tempValue = this.state.restaurantsInput;
        let tempObj = {
            name: tempValue,
            type: 'none',
            price: 0,
        }
        let tempArr = [...this.state.restaurants];
        tempArr.push(tempObj);
        this.setState(Object.assign({}, this.state, {restaurantsInput: 'Restaurant Name', restaurants: tempArr}));
    }
    // ADD LIST TO STORE
    saveList() {
        if (this.state.restaurants.length > 0) {
            let title = this.state.title;
            let restaurants = this.state.restaurants;
            this.props.newList(title, restaurants);
            this.setState({
                titleInput: 'List Title',
                restaurantsInput: 'Restaurant Name',
                title: '',
                restaurants: [],
                editTitle: true,
                editItem: false,
                restaurantToEdit: {
                index: 0
                }
            })
        }
    }
    // DISPLAY EDIT MODULE
    editItem(index) {
        let temp = Object.assign({}, this.state.restaurants[index], {index});
        this.setState(Object.assign({}, this.state, {editItem: true, restaurantToEdit: temp}))
    }
    // EDIT MODULE CALLBACKS
    cancelChanges() {
        this.setState(Object.assign({}, this.state, {editItem: false, restaurantToEdit: {index: 0}}))
    }
    deleteRestaurant(index) {
        let resArrayCopy = [...this.state.restaurants];
        resArrayCopy.splice(index, 1);
        this.setState(Object.assign({}, this.state, {restaurants: resArrayCopy, editItem: false}))
    }
    saveChanges(index, name, type, price) {
        let updatedRestaurant = {name, type, price};
        let resArrayCopy = [...this.state.restaurants];
        console.log(resArrayCopy);
        console.log(updatedRestaurant);
        resArrayCopy.splice(index, 1, updatedRestaurant);
        console.log(resArrayCopy);
        this.setState(Object.assign({}, this.state, {restaurants: resArrayCopy, editItem: false}))
    }
    render(){
        return (
            <div id='MakeAList'>
                {/*SET NEW LIST TITLE*/}
                <h1>Make A List</h1>
                <form>
                    <h4>Title:</h4>
                    {this.state.editTitle 
                    ?
                        <div>
                            <input value={this.state.titleInput} onChange={this.handleTitleChange}></input>
                            <button onClick={this.saveTitle}>Save</button>
                        </div>
                    :   
                        <span onClick={() => this.setState(Object.assign({}, this.state, {editTitle: true}))}>{this.state.title}</span>
                    }
                </form>
                {/*LIST OF RESTAURANTS ADDED TO NEW LIST*/}
                <h4>Restaurants:</h4>
                {this.state.restaurants.map((item, i) =>{
                    return (
                        <div key={i}>
                            <span>{item.name}</span>
                            <span>{item.type}</span>
                            <span>{item.price}</span>
                            <button onClick={() => this.editItem(i)}>Edit</button>
                        </div> 
                    )} 
                )}
                {/*ADD MORE RESTAURANTS*/}
                <form>
                    <input value={this.state.restaurantsInput} onChange={this.handleRestaurantChange}></input>
                    <button onClick={this.addRestaurant}>Add</button>
                </form>
                {/*SAVE LIST TO STORE*/}
                <button onClick={this.saveList}>Save List</button>
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
export default connect(mapStateToProps, { newList })(MakeAList);