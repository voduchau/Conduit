import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllArtical } from '../redux/action';
import user from '../image/user.png'
class Postdetail extends Component {
    componentDidMount = () => {
        this.props.getAllArtical();
    }
    renderItem = () => {
        return this.props.item.map(item => {
            if (item.id == this.props.match.params.id) {
                return (
                    <div key={item.id.toString()}>
                        <div className="ui segment" >
                            <p>{item.title}</p>
                            <p>{item.tag}</p>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                              <img src={user} />
                            </a>
                            <div className="content">
                              <a className="author">Joe Henderson</a>
                              <div className="metadata">
                                <span className="date">5 days ago</span>
                              </div>
                              <div className="text">
                                Dude, this is awesome. Thanks so much
                              </div>
                              <div className="actions">
                                <a className="reply">Reply</a>
                              </div>
                            </div>
                        </div>
                        <form className="ui reply form">
                            <div className="field">
                              <textarea></textarea>
                            </div>
                            <div className="ui blue labeled submit icon button">
                              <i className="icon edit"></i> Add Reply
                            </div>
                        </form>
                    </div>
                )
            }
        })
    }
    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        item: Object.values(state.showArticle)
    }
}
export default connect(mapStateToProps, { getAllArtical })(Postdetail);