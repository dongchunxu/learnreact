import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from  'jquery';
import axios from 'axios';

class UserGist extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', lastGistUrl: ''};
    }

    componentDidMount() {
        // this.serverRequest = $.get(this.props.source, function (result) {
        //     let lastGist = result[0];
        //     this.setState({
        //         username: lastGist.owner.login,
        //         lastGistUrl: lastGist.html_url
        //     });
        // }.bind(this));
        axios.get(this.props.source)
        .then(function (response) {
                let lastGist = response.data[0];
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
        }).catch(function (error) {
            console.log(error);
        });
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                {this.state.username} 用户最新的Gist地址是：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
    }
}

export default UserGist;