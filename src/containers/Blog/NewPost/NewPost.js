import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    postHandler= ()=> {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.content
        }
        axios.post("https://finix-burger-default-rtdb.firebaseio.com/", data)
        .then(reponse=> console.log(reponse))
        .catch(error=>console.log(error))
    }
    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;