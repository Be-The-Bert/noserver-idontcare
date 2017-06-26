import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { newList } from './../../ducks/actions';

import EditItem from './../Moduls/EditItem/EditItem';

class MakeAList extends Component {
    constructor(){
        super();
        this.state = {
            titleInput: '',
            restaurantsInput: '',
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
            type: '',
            price: '$',
        }
        let tempArr = [...this.state.restaurants];
        tempArr.push(tempObj);
        this.setState(Object.assign({}, this.state, {restaurantsInput: '', restaurants: tempArr}));
    }
    // ADD LIST TO STORE
    saveList() {
        if (this.state.restaurants.length > 0) {
            let title = this.state.title;
            let restaurants = this.state.restaurants;
            this.props.newList(title, restaurants);
            this.setState({
                titleInput: '',
                restaurantsInput: '',
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
                <h1>Make A List</h1>
                <div className='titlesContainer'>
                    <h4>Title:</h4>
                    <h4>Restaurants:</h4>
                </div>
                <div className='formsContainer'>
                {/*EDIT TITLE*/}
                    <form>
                        {this.state.editTitle 
                        ?
                            <div className='titleForm'>
                                <input value={this.state.titleInput} onChange={this.handleTitleChange}></input>
                                <button onClick={this.saveTitle}>Save</button>
                            </div>
                        :   
                            <h5 className='listTitle' onClick={() => this.setState(Object.assign({}, this.state, {editTitle: true}))}>{this.state.title}</h5>
                        }
                    </form>
            
                {/*LIST OF RESTAURANTS ADDED TO NEW LIST*/}
                        {this.state.restaurants.map((item, i) =>{
                            return (
                                <div className='restaurantList'key={i}>
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.type}</p>
                                        <p>{item.price}</p>
                                    </div>
                                    <button onClick={() => this.editItem(i)}>Edit</button>
                                </div> 
                            )} 
                        )}
                    
                {/*ADD MORE RESTAURANTS*/}
                <form className='restaurantForm'>
                    <input value={this.state.restaurantsInput} onChange={this.handleRestaurantChange}></input>
                    <button onClick={this.addRestaurant}>Add</button>
                </form>
               
                </div>
                {/*SAVE LIST TO STORE*/}
                <div className='bottom'>
                    <div className='saveList'>
                        <button onClick={this.saveList}>Save List</button>
                    </div>
                    <HashLink to='/#Lists' >
                        <svg className='downArrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.414 59.414" aria-labelledby="title">
                        <title id="title">Down Arrow</title>
                        <polygon points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561" />
                        </svg>
                    </HashLink>
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
export default connect(mapStateToProps, { newList })(MakeAList);