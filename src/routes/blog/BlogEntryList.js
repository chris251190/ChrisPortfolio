import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Blog.css';
import BlogEntry from './BlogEntry';

class BlockEntryList extends React.Component {
  render() {
    return (
      <div className={s.blogentry}>
        <h1>Block Entry List</h1>
        <ul>
          <BlogEntry title="Example Title" />
          <BlogEntry title="Example Title" />
          <BlogEntry title="Example Title" />
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(BlockEntryList);
