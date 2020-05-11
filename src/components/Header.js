import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { customHistory } from "../customHistory";
import {connect} from 'react-redux';
import { isLogin, User } from '../redux/action';
import Home from './Home';
import Newpost from './Newpost';
import bg from '../image/bg.jpg';

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
                <Link to="/setting" className="ui inverted yellow  button"><i class="icon settings"></i>Setting</Link>
                <Link to="/profile" className="ui inverted yellow  button"><i className="user circle icon"></i>{this.GoogleApi.currentUser.get().getBasicProfile().getName()}</Link>
                <Link to="/active" className="ui inverted yellow  button" onClick={()=>this.handleSignOut()}>Sign Out</Link>
                </>
            )
        }
        return <Link to="/Login" className="ui inverted yellow  button" onClick={()=>this.handleSignIn()}>Sign In</Link>
    }
    render() {
        return (
            <Router>
                <div style={divStyle} className="ui secondary menu segment">
                        <Link to="/" className="ui inverted yellow  button">Home</Link>
                        <Link to="/active" className="ui inverted yellow  button">Active</Link>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        {this.renderLogin()}
                    </div>
                </div>
                <Switch>
                    <Route path="/posts/new" component={Newpost}  history={customHistory} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
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
    backgroundImage: 'url(' + bg + ')',
    // backgroundColor: '#1e8fb9'
  };
export default connect(mapStateToProps, { isLogin, User })(Header);