export const initialState = {
  posts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
        posts: [...state.posts, action.payload.newPost],
      };
    }
    default:
      throw new Error(`can't find action type of ${action.type}`);
  }
};
