import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getAllArtical } from '../redux/action'
import logo from '../image/user.png'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import bg2 from '../image/bg2.jpg'
class Home extends Component{
    componentDidMount = () => {
        this.props.getAllArtical()
        console.log(logo,'image')
    }
    renderItems = () => {
        return this.props.allarticle.map(item => {
            return (
            <>
                {/* <div className="ui stacked segment">
                    <div className="ui list" key={item.id}>
                        <div className="ui tiny image">
                            <img src={logo} alt="image-user" />
                        </div>
                        <div className="item">
                          <div className="content">
                            <a className="header">{this.props.User}</a>
                            <div className="description">{item.title}</div>
                            <div className="description">{item.discribe}</div>
                            <div className="description">{item.date}</div>
                          </div>
                        </div>
                    </div>
                </div> */}
                <div className="ui stacked segment" style={divStyle}>
                <div class="ui link items">
                    <div class="item">
                      <div class="ui tiny image">
                        <img src="https://semantic-ui.com/images/avatar/large/veronika.jpg" />
                      </div>
                      <div class="content">
                        <div class="header">{this.props.User}</div>
                        <p style={{fontSize:10, fontStyle:'italic'}}>{item.date}</p>
                        <div class="description">
                            <p>{item.title}</p>
                            <p>{item.discribe}</p>
                            {/* <p>{item.date}</p> */}
                        </div>
                      </div>
                    </div>
                    <Link to="/" className="item">Read more ...</Link>
                </div>
                </div>
            </>
            )
        })
    }
    render(){
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.User,'user')
    return {
        allarticle: Object.values(state.showArticle),
        User: state.User
    }
}
const divStyle = {
    // backgroundImage: 'url(' + bg2 + ')',
    backgroundColor: '#e5f3f3'
}
export default connect(mapStateToProps, {getAllArtical})(Home);