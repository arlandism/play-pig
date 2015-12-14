const React = require('react');
const RollButton = require('./buttons/roll.jsx');
const HoldButton = require('./buttons/hold.jsx');
const StagingArea = require('./stagingArea.jsx');

class MoveArea extends React.Component {

  render() {
    return(
      <div className="col-md-6">
        <StagingArea {...this.props} />
        <div>
          <RollButton />
          <HoldButton />
        </div>
      </div>
    )
  }
}

module.exports = MoveArea;
