import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Topic extends Component {

    render() {

        let topic = this.props.topic;

        return (
            <div className="row row-topic">
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">[{topic.posted_date.format('DD/MM/YY')}] </div>
                        <div className="col-xs-12 topic-title">{topic.title} </div>
                        <div className="col-xs-12">
                            <span className="glyphicon glyphicon-arrow-up vote-arrow" onClick={this.props.submitVote.bind(this, topic, 1)}/> {topic.upvotes} <span className="glyphicon glyphicon-arrow-down vote-arrow" onClick={this.props.submitVote.bind(this, topic, -1)} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;
