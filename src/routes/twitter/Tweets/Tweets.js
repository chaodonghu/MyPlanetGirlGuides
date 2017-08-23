import React from 'react';
import Tweet from '../Tweet/Tweet';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tweets.css';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });
    return (
      <ul className={s.tweets}>{content}</ul>
    );
  }
}

export default withStyles(s)(Tweets);