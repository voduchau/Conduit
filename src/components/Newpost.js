import React, { Component } from 'react';
import { handleTitle, handleAbout, handleDiscribe, handleTag, handleSubmit, getAllArtical } from '../redux/action';
import { connect } from 'react-redux';
class Newpost extends Component {

    componentDidMount = ()=> {
        this.props.getAllArtical();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.isLogin){
            this.props.handleSubmit(this.props.article)
        }
        this.props.history.push('/')
    }
    handleTitle = (e) => {
        this.props.handleTitle(e.target.value);
    }
    handleAbout = (e) => {
        this.props.handleAbout(e.target.value);
    }
    handleDiscribe = (e) => {
        this.props.handleDiscribe(e.target.value);
    }
    handleTag = (e) => {
        this.props.handleTag(e.target.value);

    }
    render() {
        return (
            <div style={{marginTop:40,paddingRight:300, paddingLeft:300}}>
                <h2>Create new post</h2>
                <form onSubmit={this.handleSubmit} >
                <div className="ui form">

                    <div className="field">
                        <input type="text" onChange={this.handleTitle} placeholder="Aritcle Title" />
                    </div>

                    <div className="field">
                        <input type="text" onChange={this.handleAbout} placeholder="What's this article about?" />
                    </div>

                    <div className="field">
                      <textarea placeholder="Write your discribe" onChange={this.handleDiscribe} />
                    </div>
                   
                    <div className="field">
                        <input type="text" onChange={this.handleTag} placeholder="Enter tags" required />
                    </div>
                </div>
                    <button type="submit" style={{marginTop:15}} className="ui primary button">Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        isLogin:state.isLogin,
        title: state.title,
        article: state.article,
        showArticle: state.showArticle
    }
}
export default connect(mapStateToProps, { handleTitle, handleAbout, handleDiscribe, handleTag, handleSubmit, getAllArtical})(Newpost);