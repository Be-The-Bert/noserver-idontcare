import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
export default connect(mapStateToProps)(Lists);