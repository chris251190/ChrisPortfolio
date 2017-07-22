import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Blog.css';

class BlogEntry extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className={s.blogentry}>
        {this.props.title}
      </div>
    );
  }
}

export default withStyles(s)(BlogEntry);
