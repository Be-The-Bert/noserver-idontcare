import React, { Component } from 'react';

export default class EditItem extends Component {
    constructor(props){
        super(props);
        const { name, type, price } = this.props.restaurantToEdit;
        this.state = {
            name,
            type,
            price
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }
    handleNameChange(e) {
        this.setState(Object.assign({}, this.state, {name: e.target.value}));
    }
    handleTypeChange(e) {
        this.setState(Object.assign({}, this.state, {type: e.target.value}));
    }
    handlePriceChange(e) {
        this.setState(Object.assign({}, this.state, {price: e.target.value}));
    }
    render(){
        return (
            <div>
                <div>
                    <span>Name:<input value={this.state.name} onChange={ e => this.handleNameChange(e) }></input></span>
                    <span>Type:<input value={this.state.type} onChange={ e => this.handleTypeChange(e) }></input></span>
                    <span>Price:<input value={this.state.price} onChange={ e => this.handlePriceChange(e) }></input></span>
                </div>
                <div>
                    <button onClick={this.props.cancelChanges}>Cancel</button>
                    <button onClick={() => this.props.deleteRestaurant(this.props.index)}>Delete</button>
                    <button onClick={() => this.props.saveChanges(this.props.index, this.state.name, this.state.type, this.state.price)}>Save</button>
                </div>
            </div>
        )
    }
}