const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload]
    
    case 'REMOVE_ONE':
      var firstMatchIndex = state.indexOf(action.payload)
      return state.filter( (item, index) => index !== firstMatchIndex)
    
    case 'REMOVE_ALL':
      return state.filter( item => item.id !== action.payload.id)

    default:
      return state
  }
}

export default cartReducer;