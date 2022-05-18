export const initialState = {
  posts: [{ user: "testuser", content: "usercontent", image: null }],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST": {
      const newPost = action.payload.newPost;
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case "TOGGLE_POST": {
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.payload) {
            console.log("item--->", item);
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
      console.log("action----->", action);
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      throw new Error(`can't find action type of ${action.type}`);
  }
};
