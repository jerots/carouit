//Main
import React, {Component} from 'react';

//Styles
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

//Libraries
import moment from 'moment';
import {ModalManager} from 'react-dynamic-modal';

//Components
import Banner from './ReusableComponents/Banner.js'
import Topic from './ReusableComponents/Topic.js'
import TopicModal from './ReusableComponents/TopicModal.js'

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

    //Adjusts votes and reload topics afterwards. Can work with both upvote and downvotes
    submitVote(topic, adjustment) {
        let topics = this.topics;

        let memory_topic = topics[topic.index];
        memory_topic.upvotes += adjustment;

        //load topic after making changes to topics array in memory
        this.loadTopics();

    }

    //load topics from memory, sort them by upvotes descending, limits it to top 20, and sets to state.
    loadTopics() {

        let topics = this.topics;

        //TO-DO: filter by top 20 topics (sorted by upvotes, descending)
        let filtered_topics = topics.slice();

        filtered_topics.sort(function (a, b) {

            //Sort by upvotes descending
            let vote_comparison = b.upvotes - a.upvotes;
            if (vote_comparison !== 0) {
                return vote_comparison;
            }

            //If upvotes are the same, sort by dates descending
            let date_comparison = b.posted_date.unix() - a.posted_date.unix();
            return date_comparison;
        });


        filtered_topics = filtered_topics.slice(0, 20);

        //add each topic's index from the topics array in memory, so that the topics can be referenced later for upvoting/downvoting
        topics.forEach(function (topic, index) {
            topic['index'] = index;
        });


        this.setState({topics: filtered_topics})

    }

    //Copied from https://github.com/xue2han/react-dynamic-modal
    // opens New Topic modal
    openModal() {
        ModalManager.open(<TopicModal pushNewTopic={this.pushNewTopic.bind(this)}/>);
    }

    //Push new topic with 'title' as parameter.
    pushNewTopic(title) {

        let topics = this.topics;

        topics.push({
            title: title,
            upvotes: 0,
            posted_date: moment()
        });

        this.loadTopics();

    }


    render() {
        let topics = this.state.topics;

        //If topics is not done loading, show loading
        let topics_print = 'loading';


        //if topics has been loaded, display them
        if (topics !== undefined) {
            topics_print = topics.map(function (topic) {

                return (

                    <Topic topic={topic} submitVote={this.submitVote.bind(this)} key={topic.title + topic.posted_date}/>

                )

            }.bind(this));
        }


        return (
            <div className="container">
                <Banner/>
                <div className="row row-buttons">
                    <div className="col-xs-12">
                        <button className="btn btn-danger" onClick={this.openModal.bind(this)}>New Topic</button>
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
