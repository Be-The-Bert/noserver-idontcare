import React, { Component } from 'react';

export default class EditItem extends Component {
    constructor(props){
        super(props);
        const copy = Object.assign({}, this.props.restaurantToEdit)
        const { name, type, price, index } = copy;
        this.state = {
            name,
            type,
            price,
            index
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
            <div id='EditItem'>

                <div className='modulContainer'>
                <div className='labels'>
                    <p>Name:</p>
                    <p>Type:</p>
                    <p>Price:</p>
                </div>
                <div id='inputs'>
                    <input value={this.state.name} onChange={ e => this.handleNameChange(e) }></input>
                    <select  id='typeSelector'onChange={ e => this.handleTypeChange(e) }>
                        {this.state.type.length
                        ?
                        <option value={this.state.type}>{this.state.type}</option>
                        :
                        <option value={this.state.type}>none</option>
                        }
                        <option value=''>none</option>
                        <option value='American'>American</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='Greek'>Greek</option>
                        <option value='Indian'>Indian</option>
                        <option value='Italian'>Italian</option>
                        <option value='Japanese'>Japanese</option>
                        <option value='Mexican'>Mexican</option>
                    </select>
                    <select id='priceSelector' onChange={ e => this.handlePriceChange(e) }>
                        <option value={this.state.price}>{this.state.price}</option>
                        <option value='$'>$</option>
                        <option value='$$'>$$</option>
                        <option value='$$$'>$$$</option>
                        <option value='$$$$'>$$$$</option>
                    </select>
                </div>
                <div className='buttons'>
                    <span onClick={this.props.cancelChanges}>Cancel</span>
                    <span onClick={() => this.props.deleteRestaurant(this.state.index)}>Delete</span>
                    <span onClick={() => this.props.saveChanges(this.state.index, this.state.name, this.state.type, this.state.price)}>Save</span>
                </div>
                </div>
            </div>
        )
    }
}