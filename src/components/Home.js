import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllArtical, handleDelete, getAllTags, deleteTag, handleTags } from '../redux/action'
import { Link } from 'react-router-dom';
import ModalBasicExample from '../modal/ModalBasicExample';
class Home extends Component {
    componentDidMount = async () => {
        await this.props.getAllArtical()
        this.props.getAllTags();
    }
    handleDelete = async (id) => {
        await this.props.handleDelete(id)
        this.props.deleteTag()
    }
    renderItems = () => {
        return this.props.allarticle.map(item => {
            return (
                <div key={item.id.toString()} style={{}}>
                    <div className="ui stacked segment" style={divStyle}>
                        <div className="ui link items">
                            <div className="item">
                                <div className="ui tiny image">
                                    <img src="https://semantic-ui.com/images/avatar/large/veronika.jpg" alt="user" />
                                </div>
                                <div className="content">
                                    <div className="header">{this.props.User}</div>
                                    <p style={{ fontSize: 10, fontStyle: 'italic' }}>{item.date}</p>
                                    <div className="description">
                                        <p>{item.title}</p>
                                        <p>{item.discribe}</p>
                                    </div>
                                </div>
                            </div>
                            <Link to={{ pathname: `/post/${item.id}` }} className="item">Read more ...</Link>
                        </div>
                        <div>
                            <ModalBasicExample handleDelete={()=>this.handleDelete(item.id)} />
                        </div>
                    </div>
                </div>
            )
        })
    }
    handleTags = async (tag) => {
       await this.props.getAllArtical();
        const a = this.props.allarticle.filter(item => {
            return item.tag == tag;
        })
        this.props.handleTags(a);
    }
    renderTags = () => {
        return this.props.Tags.map(item => {
            return (
                <div key={item} style={{margin:5}}>
                    <a className="ui teal tag label" onClick={()=>this.handleTags(item)}>{item}</a>
                </div>
            )
        })

    }
    
    render() {
        return (
            <>
                <div style={{display: 'flex',paddingLeft:0,flexDirection:'row'}}>
                    <div style={{width:'70%'}}>
                        {this.renderItems()}
                    </div>
                    <div className="ui stacked segment" style={{marginTop:0, height: 'auto',width:'20%',right:150, position:'fixed', backgroundColor:'#e5f3f3'}}>
                    <a className="ui red ribbon label">All Tags</a>
                        <div className="ui link items">
                            {this.renderTags()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allarticle: Object.values(state.showArticle),
        User: state.User,
        Tags:[...new Set(state.GetTags)]
    }
}
const divStyle = {
    // backgroundImage: 'url(' + bg2 + ')',
    backgroundColor: '#e5f3f3'
}
export default connect(mapStateToProps, { getAllArtical, handleDelete, getAllTags, deleteTag, handleTags })(Home);