import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteList, changeCurrent } from './../../../ducks/actions';

class Lists extends Component {
    render(){
        return (
            <div className='listOfListsContainer'>
                {this.props.lists.length > 0 ?
                <div className='listOfLists'>
                    {this.props.lists.map( (item, i)=>{
                            return (
                                <div className='titlesContainer' key={i}>
                                    <Link className='titles'to={`/lists/${i}`} onClick={() => this.props.changeCurrent(i)}>
                                        {item.title}
                                    </Link>
                                </div>
                        )}
                    )}
                </div>
                :
                null
                }
                {this.props.lists.length > 0 ?
                <div className='listOfLists'>
                    {this.props.lists.map( (item, i)=>{
                            return (
                                <div className='deleteContainer' key={i}>
                                    <Link to='/'>
                                        <svg onClick={(i) => this.props.deleteList(i) } version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                                        viewBox="0 0 31.112 31.112">
                                            <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 29.698,31.112 31.112,29.698 16.97,15.556 "/>
                                        </svg>
                                    </Link>
                                </div>
                        )}
                    )}
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
        lists: state.lists
    }
}
export default connect(mapStateToProps, { deleteList, changeCurrent })(Lists);

// onClick={(i) => this.props.changeIndex(i)}