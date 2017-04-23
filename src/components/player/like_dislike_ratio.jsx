import React from 'react';

class LikeDislikeRatio extends React.Component {

  getPercent() {
    return `${this.props.ratio * 100}%`;
  }

  render() {
    return (
      <div className='like-dislike-ratio-background'>
        <div className='like-dislike-ratio' style={{width: this.getPercent()}}></div>
      </div>
    );
  }
}

export default LikeDislikeRatio;