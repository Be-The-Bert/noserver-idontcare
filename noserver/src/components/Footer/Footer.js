import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { changeCurrent } from './../../ducks/actions.js';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            toggle: false
        }
        this.choose = this.choose.bind(this);
        this.slide = this.slide.bind(this);
        this.choose = this.choose.bind(this);
    }
    choose(){
        let total = this.props.lists[this.props.currentList].restaurants.length;
        let answerIndex = Math.floor(Math.random() * total);
        this.setState({
            answer: this.props.lists[this.props.currentList].restaurants[answerIndex].name
        })
    }
    slide(){
        this.setState({toggle: !this.state.toggle});
    }
    change(e) {
        this.props.changeCurrent(e.target.value);
    }
    render(){
        return (
            <div id='Footer' >
                <div className={`footerHide ${this.state.toggle ? 'footerSlide': null}`}>
                    <div className='titleContainer'>
                        <h2>Current List:</h2>
                        {this.state.toggle
                        ?
                            <select id='listSelector' onChange={(e) => this.change(e)}>
                                <option value={this.props.currentList}>{this.props.lists[this.props.currentList].title}</option>
                                {this.props.lists.map((item, i) => {
                                    return <option key={i} value={i}>{item.title}</option>
                                })}
                            </select>
                        :
                            <h3>{this.props.lists[this.props.currentList].title}</h3>
                        }
                        <div className='listOfRestaurants'>
                            {this.props.lists[this.props.currentList].restaurants.map((item, i) => <h3 key={i}>{item.name}</h3>)}
                        </div>
                    </div>
                    <h2>Filters:</h2>
                    <h3>NONE</h3>
                    
                    <span className='detailsButton' onClick={this.slide}>Details</span>
                    <HashLink to='/#Lists' className='editLink' onClick={this.slide}><span>Edit your lists</span></HashLink>
                    <button onClick={this.choose}>Choose!</button>
                </div>
                {this.state.answer.length
                ?
                    <div className='backgroundContainer'>
                    <div className='resultsModul'>
                        <span >The Results Are In</span>
                        <h2>{this.state.answer}</h2>
                        <span className='p2'>You'll Have a Great Time</span>
                        <div className='cancelContainer'>
                            <Link to='/'>
                                        <svg onClick={() => this.setState({answer: ''})} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                                        viewBox="0 0 31.112 31.112">
                                            <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 29.698,31.112 31.112,29.698 16.97,15.556 "/>
                                        </svg>
                            </Link>
                        </div>
                    </div>
                    </div>
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
export default connect(mapStateToProps, { changeCurrent })(Footer);