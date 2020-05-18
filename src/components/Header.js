import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { customHistory } from "../customHistory";
import {connect} from 'react-redux';
import { isLogin, User, getAllArtical } from '../redux/action';
import Home from './Home';
import Newpost from './Newpost';
import SearchBar from './SearchBar';
import Postdetail from './Postdetail';
import NotFound from '../page/NotFound';
class Header extends React.Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.auth2.init({
                clientId:'94088473979-iumbu96ofgk0ekhkerockjbprfco86k5.apps.googleusercontent.com',
                scope: 'email'}).then(()=>{
                    this.GoogleApi = window.gapi.auth2.getAuthInstance();
                    if(this.GoogleApi.isSignedIn.get()){
                        this.props.User(this.GoogleApi.currentUser.get().getBasicProfile());
                    }
                    this.props.isLogin(this.GoogleApi.isSignedIn.get())
                })
        })
    }
    handleSignIn = async () =>{
        if(!this.GoogleApi.isSignedIn.get()){
           await this.GoogleApi.signIn();
            this.props.isLogin(true)
            this.props.User(this.GoogleApi.currentUser.get().getBasicProfile());
        }
        this.props.history.push('/posts/new')
    }
    handleSignOut = () => {
        this.GoogleApi.signOut();
        this.props.isLogin(false)
    }
    renderLogin = () => {
        if(this.props.checkIsLogin){
            return (
                <>
                <Link to="/posts/new" className="ui inverted yellow  button"> <i className="edit outline icon"></i>New Post</Link>
                <Link to="/setting" className="ui inverted yellow  button"><i className="icon settings"></i>Setting</Link>
                <Link to="/profile" className="ui inverted yellow  button"><i className="user circle icon"></i>{this.GoogleApi.currentUser.get().getBasicProfile().getName()}</Link>
                <button className="ui inverted yellow  button" onClick={()=>this.handleSignOut()}>Sign Out</button>
                </>
            )
        }
        return <button className="ui inverted yellow  button" onClick={()=>this.handleSignIn()}>Sign In</button>
    }
    handleHome = () => {
        this.props.getAllArtical();
    }
    render() {
        return (
            <>
                <div style={divStyle} className="ui secondary menu segment">
                        <Link to="/" className="ui inverted yellow  button" onClick={()=>this.handleHome()}>Home</Link>
                        <Link to="/active" className="ui inverted yellow  button">Active</Link>
                    <div className="right menu">
                        <SearchBar />
                        {this.renderLogin()}
                    </div>
                </div>
                <Switch>
                    <Route path="/posts/new" component={Newpost} />
                    <Route path="/" exact component={Home} />
                    <Route path="/post/:id" component={Postdetail} />
                    <Route component={NotFound} />
                </Switch>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        checkIsLogin:state.isLogin
    }
}
const divStyle = {
    color: 'blue',
    backgroundColor: '#aca03f'
  };
export default connect(mapStateToProps, { isLogin, User, getAllArtical })(Header);