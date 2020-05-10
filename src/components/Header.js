import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {isLogin} from '../redux/action';
class Header extends React.Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.auth2.init({
                clientId:'94088473979-iumbu96ofgk0ekhkerockjbprfco86k5.apps.googleusercontent.com',
                scope: 'email'}).then(()=>{
                    this.GoogleApi = window.gapi.auth2.getAuthInstance();
                    this.props.isLogin(this.GoogleApi.isSignedIn.get())
                })
        })
    }
    handleSignIn = async () =>{
        if(!this.GoogleApi.isSignedIn.get()){
           await this.GoogleApi.signIn();
            this.props.isLogin(true)
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
                <Link to="/newpost" className="item"> <i class="edit outline icon"></i>New Post</Link>
                <Link to="/setting" className="item"><i class="wrench icon"></i>Setting</Link>
                <Link to="/profile" className="item"><i class="user circle icon"></i>{this.GoogleApi.currentUser.get().getBasicProfile().getName()}</Link>
                <Link to="/active" className="ui item" onClick={()=>this.handleSignOut()}>Sign Out</Link>
                </>
            )
        }
        return <Link to="/Login" className="ui item" onClick={()=>this.handleSignIn()}>Sign In</Link>
    }
    render() {
        return (
            <Router>
                <div className="ui secondary  menu">
                        <Link to="/" className="active item">Home</Link>
                        <Link to="/active" className="item">Active</Link>
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
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.isLogin,'isLogin')
    return {
        checkIsLogin:state.isLogin
    }
}
export default connect(mapStateToProps, {isLogin})(Header);