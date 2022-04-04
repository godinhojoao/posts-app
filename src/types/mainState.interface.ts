import { PostWithPagination } from "./postWithPagination.interface";

export interface MainState {
  name: string | null;
  posts: PostWithPagination;
}