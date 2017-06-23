import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
        this.choose =this.choose.bind(this);
    }
    choose(){
        let total = this.props.lists[this.props.currentList].restaurants.length;
        let answerIndex = Math.floor(Math.random() * total);
        this.setState({
            answer: this.props.lists[this.props.currentList].restaurants[answerIndex].name
        })
    }
    render(){
        return (
            <div>
                <h1 id='footer'>Footer</h1>
                <h2>{this.props.lists[this.props.currentList].title}</h2>
                <button onClick={this.choose}>Choose!</button>
                <h2>{this.state.answer}</h2>
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
export default connect(mapStateToProps)(Footer);