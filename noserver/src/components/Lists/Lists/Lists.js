import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteList } from './../../../ducks/actions';

class Lists extends Component {
    render(){
        return (
            <div>
                
                <ul>
                    {this.props.lists.map( (item, i)=>{
                            return (
                                <div key={i}>
                                    <Link to={`/lists/${i}`}>
                                        <li>{item.title}</li>
                                    </Link>
                                    <button onClick={(i) => this.props.deleteList(i)}>Delete</button>
                                </div>
                        )}
                    )}
                </ul>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists
    }
}
export default connect(mapStateToProps, { deleteList })(Lists);