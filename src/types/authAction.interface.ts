import { PostWithPagination } from "./postWithPagination.interface";

export interface AuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload: {
    name: string;
    posts: PostWithPagination;
  };
}