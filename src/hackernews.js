import React, { Component } from "react";

class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = { stories: [] };
  }

  componentDidMount() {
    const topStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const storyUrlBase = "https://hacker-news.firebaseio.com/v0/item/";

    fetch(topStories)
      .then(data => data.json())
      .then(data =>
        data.map(id => {
          const url = `${storyUrlBase}${id}.json`;
          return fetch(url).then(a => a.json());
        })
      )
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({ stories }));
  }

  render() {
    let views = <div>LOADING ...</div>;
    const { stories } = this.state;
    if (stories && stories.length > 0) {
      views = stories.map(s => (
        <p key={s.id}>
          <a href={s.url}>{s.title}</a> from <strong>{s.by}</strong>
        </p>
      ));
    }
    return (
      <div>
        <center>
          <h1>HackerNews</h1>
        </center>

        <center>{views}</center>
      </div>
    );
  }
}

export default HackerNews;
