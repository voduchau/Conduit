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
                        <div class="comment">
                            <a class="avatar">
                              <img src={user} />
                            </a>
                            <div class="content">
                              <a class="author">Joe Henderson</a>
                              <div class="metadata">
                                <span class="date">5 days ago</span>
                              </div>
                              <div class="text">
                                Dude, this is awesome. Thanks so much
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                        </div>
                        <form class="ui reply form">
                            <div class="field">
                              <textarea></textarea>
                            </div>
                            <div class="ui blue labeled submit icon button">
                              <i class="icon edit"></i> Add Reply
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