import { AuthAction } from "../../types/authAction.interface";

const INITIAL_STATE = {
  name: '',
  posts: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
};

const Types = {
  'LOGIN': (state = INITIAL_STATE, action: AuthAction) => (
    {
      ...state,
      name: action.payload.name,
      posts: action.payload.posts
    }
  ),
  'LOGOUT': (state = INITIAL_STATE) => (
    {
      ...state,
    }
  )
};

export const auth = (state = INITIAL_STATE, action: AuthAction) => {
  return Types[action.type] ? Types[action.type](state, action) : null;
};