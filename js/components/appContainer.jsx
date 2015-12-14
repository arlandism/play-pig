const React = require('react');
const Header = require('./header.jsx');
const MoveArea = require('./moveArea.jsx');
const store = require('../store/store');

class AppContainer extends React.Component {

  componentWillMount() {
//    this.setState(store.getState())
//    store.subscribe(() => this.setState(store.getState()))
    store.subscribe(() => console.log(store.getState()))
  }

  render() {
    return (
      <div className="container">
        <Header {...this.props} />
        <div>
          <MoveArea {...this.props} />
          <MoveArea {...this.props} />
        </div>
      </div>
    )
  }

}

module.exports = AppContainer;
