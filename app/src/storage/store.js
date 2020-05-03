import { createStore } from 'redux'


function state(state = {addtodo: false, addlabel: false, reload: false, edit: null, lastAction: "CLEARINIT"}, action) {
  switch (action.type) {
    case 'ADDTODO':
      return state = {addtodo: true, addlabel: false, reload: false, edit: action.data, lastAction: action.type}
    case 'CLEAR':
      return state = {addtodo: false, addlabel: false, reload: false, edit: null, lastAction: action.type}
    case 'CLEARRELOAD':
      return state = {addtodo: false, addlabel: false, reload: action.data, edit: null, lastAction: action.type}
    case 'CLEAREDIT':
      return state = {addtodo: false, addlabel: false, reload: false, edit: action.data, lastAction: action.type}
    default:
      return state
  }
}


export let store = createStore(state)
