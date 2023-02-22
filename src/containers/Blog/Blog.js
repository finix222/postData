import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const post = response.data.slice(0, 4);
        const updatedPost = post.map((post) => {
          return { ...post, author: "ifeanyi" };
        });
        this.setState({ posts: updatedPost });
        console.log(response.data);
      })
      .catch((response) => console.log(response));
  }
  postSelectHandler(id) {
    this.setState({ selectedPost: id });
  }
  render() {
    const post = this.state.posts.map((post) => (
      <Post
        title={post.title}
        key={post.id}
        author={post.author}
        clicked={() => this.postSelectHandler(post.id)}
      />
    ));
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="../../components/NewPost/NewPost.js">NewPost</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{post}</section>
        <section>
          <FullPost id={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
