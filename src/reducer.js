const initialState = {
  posts:[],
  currentUser: null,
  activeLocation: null,
  userToView: null,
  todaysWords: [],
  today: {},
  dateToView: {},
  currentDate: null,
  time:null
}

const store = require('store')

export default function reducer(state=initialState, action){
  switch(action.type) {
    case "UPDATE_USER":
    return { ...state, currentUser: action.payload }
    case "CHANGE_LOCATION":
    return { ...state, activeLocation: action.payload }
    case "UPDATE_USER_TO_VIEW":
    return { ...state, userToView: action.payload }
    case "ADD_WORD":
    return { ...state, todaysWords:[...state.todaysWords, action.payload] }
    case "SET_DATE":
    return {...state, today:action.payload}
    case "SET_DAYS":
    return {...state, days:action.payload}
    case "UPDATE_DATE_TO_VIEW":
    return {...state, dateToView:action.payload}
    case "LOGOUT":
    store.remove('jwt')
    return {...initialState, today:state.today, days:state.days}
    case "SET_CURRENT_DATE":
    return {...initialState, currentDate:action.payload}
    default:
    return state;
  }

}
