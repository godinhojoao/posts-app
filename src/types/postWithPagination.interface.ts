import { Post } from "./post.interface";

export interface PostWithPagination {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}