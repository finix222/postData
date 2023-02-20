import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
//   componentDidUpdate (){
//       if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
//         axios.get("https://jsonplaceholder.typicode.com/posts" + this.props.id)
//         .then(response=> this.setState({loadedPost:response.data}))
//       }
   
//   }
  render() {
    let post = <p>Please select a Post!</p>;
   if(this.state.loadedPost){
    if (this.props.id) {
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button className="Delete">{this.props.Delete}</button>
            </div>
          </div>
        );
      }
   }

    return post;
  }
}

export default FullPost;
