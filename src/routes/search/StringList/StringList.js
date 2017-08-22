/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StringList.css';

class StringEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excluded: ["testword"]
    };

    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return (
      <div>
        <label>{this.props.word}</label>
        <button onClick={this.deleteSelf}>X</button>
      </div>
    );
  }
}

class StringList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excluded: ["testword"],
      inputValue: ""
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteItem(id) {
    const excluded=this.state.excluded.map((i) => i);
    /*
    let i;
    for (i=0;i<excluded.length;i++) {
      if (excluded[i].id === id) {
        break;
      }
    } */

    excluded.splice(id,1);

    this.setState({
      excluded: excluded
    });
  }

  addItem(event) {
    event.preventDefault();

    const excluded=this.state.excluded.map((i) => i);
    var word=this.state.inputValue;
    word.toLowerCase();
    excluded.splice(0,0,word);

    this.setState({
      excluded: excluded,
      inputValue: ""
    });
  }

  handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }

  render() {
    const excludedWords=this.state.excluded.map((word,idx)=>{
      return (
        <StringEntry
          className = {s.entry}
          id={idx}
          word={word}
          deleteItem={this.deleteItem}
        />
      );
    });
    return (
      <div>
        Search Set
        <ul>
          <form onSubmit={this.addItem}>
            <input onChange={this.handleChange} value={this.state.inputValue}/>
            <button>Add</button>
          </form>
          {excludedWords}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(StringList);
