import React, { Component } from 'react'
import $ from 'jquery'

class student extends Component{
constructor(props){
  super(props);
  this.state = {
    url: "",
    avatar:"",
    public_repos: ""

  }
}
componentDidMount() {
  this.serverRequest = $.get(`https://api.github.com/users/${this.props.params.username}`, function (result) {
    console.log(result);
    this.setState({
      url: result.html_url,
      avatar: result.avatar_url,
      public_repos: result.public_repos
    });
  }.bind(this));
}
componentWillUnmount() {
  this.serverRequest.abort();
}
render() {
  console.log(this.props.params.username);
  return (
    <div>
      <p>GitHub Account: <a href={`${this.state.url}`}>{this.state.url}</a></p>
      <p># of Repos: {this.state.public_repos}</p>
      <p><img src={this.state.avatar} alt=""/></p>
    </div>
    );
  }
}

export default student
