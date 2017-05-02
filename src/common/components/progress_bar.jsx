import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       progress: 0.1
     };

     this.animate;
  }

  componentDidMount() {
    this.animate = setInterval(() => {
      if (this.props.progress >= 100) {
        clearInterval(this.animate);
      } else {
        this.props.updateProgress();
      }
    }, 33);
  }

  componentWillUnMount() {
    clearInterval(this.animate);
  }

  render() {
    return (
      <div id='progress-bar' style={{ width: this.props.progress + '%' }}></div>
    );
  }
}

ProgressBar.propTypes = {
  isLoading: PropTypes.bool
};

export { ProgressBar };