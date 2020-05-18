import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleSearch, HandleFindPost} from '../redux/action'
class SearchBar extends Component {
    

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.HandleFindPost(this.props.Search)
    }

    handleChange = (e) => {
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
            <>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <div className="item">
                    <div className="ui icon input">
                        <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </form>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Search: state.SearchBar
    }
}
export default connect(mapStateToProps, {handleSearch, HandleFindPost})(SearchBar);