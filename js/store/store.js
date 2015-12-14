const Redux = require('redux');

function score(score = 0, action) {
  if (action.type === "ROLL") {
    return score + action.delta
  }
  else
    return score
}

let store = Redux.createStore(score)

module.exports = store;
