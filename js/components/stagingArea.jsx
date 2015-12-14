const React = require('react');

class StagingArea extends React.Component {

  render() {
    return (
      <div>{this.props.score}</div>
    )
  }
}

module.exports = StagingArea;
