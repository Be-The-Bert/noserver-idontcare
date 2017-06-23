import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteList, changeCurrent } from './../../../ducks/actions';

class Lists extends Component {
    render(){
        return (
            <div>
                {this.props.lists.length > 0 ?
                <ul>
                    {this.props.lists.map( (item, i)=>{
                            return (
                                <div key={i}>
                                    <Link to={`/lists/${i}`}>
                                        <li onClick={() => this.props.changeCurrent(i)}>{item.title}</li>
                                    </Link>
                                    <Link to='/'>
                                        <button onClick={(i) => this.props.deleteList(i) }>Delete</button>
                                    </Link>
                                </div>
                        )}
                    )}
                </ul>
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