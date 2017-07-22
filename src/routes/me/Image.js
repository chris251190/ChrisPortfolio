import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    return <img src={this.props.source} alt="This is me!" />;
  }
}

export default Image;
