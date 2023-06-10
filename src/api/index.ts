// eslint-disable-next-line import/named
import axios, { AxiosResponse } from 'axios';
import { IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:8000',
});

// todo (6) api 작성

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostById = (id: number) => {
  return instance.get('post/${id}');
};

export const updatePostById = () => {
  return null;
};

export const deletePostById = () => {
  return null;
};
