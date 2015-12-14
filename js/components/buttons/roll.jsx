const React = require('react');
const store = require('../../store/store');
const RollEvent = require('../../events/rollEvent');

class RollButton extends React.Component {

  triggerRoll() {
    store.dispatch(RollEvent);
  }

  render() {
    return (
      <button onClick={this.triggerRoll.bind(this)}>Roll</button>
    )
  }
}

module.exports = RollButton;
