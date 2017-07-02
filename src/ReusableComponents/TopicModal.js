import React, {Component} from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Modal, ModalManager, Effect} from 'react-dynamic-modal';

class TopicModal extends Component {

    constructor(props){
        super(props);

        this.state = {title: ''};

    }


    changeHandler(e){
        let value = e.target.value;
        if (value.length < 255){
            this.setState({title: value})
        }
    }

    submitNewTopic(){

        this.props.pushNewTopic(this.state.title);
        ModalManager.close();
    }

    render() {
        return (
            <Modal
                effect={Effect.RotateFromLeft3D}>

                <div className="modal-custom">
                    <h1>New Topic</h1>

                    <input className="form-control" value={this.state.title} onChange={this.changeHandler.bind(this)} />
                    <div className="modal-footer">
                    <button className="btn btn-default" onClick={ModalManager.close}>Close</button>
                    <button className="btn btn-danger" onClick={this.submitNewTopic.bind(this)}>Submit</button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default TopicModal;
