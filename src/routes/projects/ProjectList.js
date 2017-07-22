import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.css';
import Project from './Project';

class ProjectList extends React.Component {
  render() {
    return (
      <div className={s.project}>
        <h1>Project List</h1>
        <ul>
          <Project title="Example Title" />
          <Project title="Example Title 2" />
          <Project title="Example Title 3" />
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(ProjectList);
