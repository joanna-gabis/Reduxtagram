// a reducer takes in two things: the action (info about what happened) and copy of current state

function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with a new comment
      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state
  }
  return state;
}

function comments(state=[], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state;
}

export default comments;
