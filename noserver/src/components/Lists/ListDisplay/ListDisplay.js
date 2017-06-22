import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListDisplay extends Component {
    itemEdit(){
        console.log('yay');
    }
    render(){
        const id = this.props.match.params.id
        return (
            <div>
                {this.props.lists[id].restaurants.map( (item, i) => {
                    return ( 
                    <div key={i}>
                        <span>{item.name}</span>
                        <span>{item.type}</span>
                        <span>{item.price}</span>
                        <button onClick={this.itemEdit}>Edit</button>
                    </div>
                    )}
                )}
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists
    }
}
export default connect(mapStateToProps)(ListDisplay);