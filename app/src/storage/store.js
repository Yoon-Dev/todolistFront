import { createStore } from 'redux'


function state(state = {addtodo: false, addlabel: false, reload: false}, action) {
  switch (action.type) {
    case 'ADDTODO':
      return state = {addtodo: true, addlabel: false, reload: false}
    case 'ADDLABEL':
      return state = {addtodo: false, addlabel: true, reload: false}
    case 'CLEAR':
      return state = {addtodo: false, addlabel: false, reload: false}
    case 'CLEARRELOAD':
      return state = {addtodo: false, addlabel: false, reload: action.data}
    default:
      return state
  }
}


export let store = createStore(state)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
