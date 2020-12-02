import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  async getAllArticles() {
    return await this.http.get(this.URL + '/python/getAll/getAll').toPromise();
  }

  async getArticleData(title) {
    console.log(encodeURI(this.URL + '/python/getOne/' + title));
    return await this.http
      .get(encodeURI(this.URL + '/python/getOne/' + title))
      .toPromise();
  }

  async getRecommendedPosts(title) {
    console.log(encodeURI(this.URL + '/python/' + title));
    return await this.http.get(this.URL + '/python/' + title).toPromise();
  }
}
