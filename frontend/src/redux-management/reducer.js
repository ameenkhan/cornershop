const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload]
    
    case 'REMOVE_ONE':
      var firstMatchIndex = state.indexOf(action.payload)
      return state.filter( (item, index) => index !== firstMatchIndex)
    
    case 'REMOVE_ALL_OF_ONE':
      return state.filter( item => item.id !== action.payload.id)
    
    case 'RESET':
      return []

    default:
      return state
  }
}

export default cartReducer;