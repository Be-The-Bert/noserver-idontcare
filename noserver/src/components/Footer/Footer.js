import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <div id='Footer'>
                <h2>{this.props.lists[this.props.currentList].title}</h2>
                <button onClick={this.choose}>Choose!</button>
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
export default connect(mapStateToProps)(Footer);