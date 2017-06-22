import React, { Component } from 'react';
import { connect } from 'react-redux';

class MakeAList extends Component {
    render(){
        return (
            <div id='MakeAList'>
                <h1>Make A List</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists
    }
}
export default connect(mapStateToProps)(MakeAList);