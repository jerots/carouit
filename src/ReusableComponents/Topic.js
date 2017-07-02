import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Topic extends Component {

    constructor(props){
        super(props)




    }

    render() {

        var topic = this.props.topic;

        return (
            <div className="row row-topic" key={topic.title + topic.posted_date}>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">[{topic.posted_date.format('DD/MM/YY')}] </div>
                        <div className="col-xs-12 topic-title">{topic.title} </div>
                        <div className="col-xs-12">
                            <span className="glyphicon glyphicon-arrow-up vote-arrow"/> {topic.upvotes} <span className="glyphicon glyphicon-arrow-down vote-arrow"/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;
