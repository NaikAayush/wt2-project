import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  addPost(post) {
    return this.http.post(this.URL + '/api/posts/addPost', post);
  }

  getPosts() {
    return this.http.get(this.URL + '/api/posts/getPosts/');
  }
  deletePost(id) {
    return this.http.post(this.URL + '/api/posts/deletePost/', { id: id });
  }
}
