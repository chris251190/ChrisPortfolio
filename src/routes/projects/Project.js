import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.css';

class Project extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className={s.project}>
        {this.props.title}
      </div>
    );
  }
}

export default withStyles(s)(Project);
