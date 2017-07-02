import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Banner from './ReusableComponents/Banner.js'

class App extends Component {


    constructor(props) {
        super();

        this.state = {};
        //hard-coded topics by default, for dev and demo purposes
        //simulates retrieval from database
        this.topics = [{
            title: 'Welcome to Carouit!',
            upvotes: 12,
            posted_date: moment('20170307')
        },
            {
                title: 'Here\'s a little tip to help you get started',
                upvotes: 9,
                posted_date: moment('20170307')
            }

        ]

    }

    componentDidMount() {
        this.loadTopics()
    }

    loadTopics() {

        let topics = this.topics;

        //TO-DO: filter by top 20 topics (sorted by upvotes, descending)

        this.setState({topics: topics})

    }


    render() {
        let topics = this.state.topics;

        let topics_print = 'loading';

        if (topics !== undefined) {
            topics_print = topics.map(function (topic) {

                return (

                    <div className="row row-topic" key={topic.title + topic.posted_date}>
                        <div className="col-xs-12">
                            {topic.title}
                        </div>
                    </div>

                )

            });
        }


        return (
            <div className="container">
                <Banner/>
                <div className="row row-buttons">
                    <div className="col-xs-12">
                        <button className="btn btn-danger">New Topic</button>
                    </div>
                </div>
                <div className="container-topic">
                    {topics_print}
                </div>
            </div>
        );
    }
}

export default App;
