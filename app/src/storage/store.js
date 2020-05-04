import { createStore } from 'redux'


function state(state = {addtodo: false, addlabel: false, reload: false, edit: null, lastAction: "CLEARINIT", lastTodo: null}, action) {
  switch (action.type) {
    case 'ADDTODO':
      return state = {addtodo: true, addlabel: false, reload: false, edit: action.data, lastAction: action.type, lastTodo: null}
    case 'CLEAR':
      return state = {addtodo: false, addlabel: false, reload: false, edit: null, lastAction: action.type, lastTodo: null}
    case 'CLEARRELOAD':
      return state = {addtodo: false, addlabel: false, reload: action.data.data, edit: null, lastAction: action.type, lastTodo: null}
    case 'CLEARDEL':
      return state = {addtodo: false, addlabel: false, reload: false, edit: null, lastAction: action.type, lastTodo: action.data}
    case 'CLEAREDIT':
      return state = {addtodo: false, addlabel: false, reload: false, edit: action.data, lastAction: action.type, lastTodo: null}
    default:
      return state
  }
}


export let store = createStore(state)
