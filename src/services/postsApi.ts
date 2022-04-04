import axios from 'axios';

import { Post } from '../types/post.interface';
import { PostWithPagination } from '../types/postWithPagination.interface';

class PostsApi {
  private readonly baseUrl = 'https://dev.codeleap.co.uk/careers/';

  async getPosts(): Promise<PostWithPagination> {
    const url = `${this.baseUrl}`;
    const response = await axios.get(url);

    return response.data;
  }

  async createPost(post: Post): Promise<PostWithPagination> {
    const url = `${this.baseUrl}`;
    const response = await axios.post(url, post);

    return response.data;
  }

  async editPost(post: Post): Promise<PostWithPagination> {
    const url = `${this.baseUrl}${post.id}/`;
    const response = await axios.put(url, post);

    return response.data;
  }

  async removePost(id: number): Promise<PostWithPagination> {
    const url = `${this.baseUrl}${id}/`;

    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data;
  }
}

export const postsApi = new PostsApi();

