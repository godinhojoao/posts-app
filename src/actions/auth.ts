export const login = (name: string, posts: any) => {
  return {
    type: 'LOGIN',
    payload: {
      name,
      posts
    }
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: {}
  };
};