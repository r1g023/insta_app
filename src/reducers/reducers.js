export const initialState = {
  posts: [{ user: "testuser", content: "usercontent", image: null }],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
        posts: [...state.posts, action.payload.newPost],
      };
    }
    case "TOGGLE_POST": {
      return {
        ...state,
        posts: state.posts.map((item) => {
          console.log("item--->", item);
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    }
    case "DELETE_TOGGLE_SELECTED": {
      return {
        ...state,
        posts: state.posts.filter((item) => !item.completed),
      };
    }

    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    }

    default:
      throw new Error(`can't find action type of ${action.type}`);
  }
};
