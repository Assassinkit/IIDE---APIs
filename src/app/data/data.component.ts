import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  items: any;
  api: any;

  posts: any[] = [];
  newPost: any;

  constructor(private fetchAPI: ApiService) { }

  ngOnInit(): void {

  }

  // getData() {
  //   this.fetchAPI.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
  //     console.log('Get Data: ', data);
  //     this.items = data;


  //   });
  // }

  // postData() {
  //   const data = {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //   };

  //   this.fetchAPI.post('https://jsonplaceholder.typicode.com/posts', data).subscribe((data: any=[]) => {
  //     console.log(data);
  //   });
  // }

  // deleteData() {
  //   this.fetchAPI.delete('https://jsonplaceholder.typicode.com/posts/1').subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }


  getData() {
    // Get data from local storage if available, otherwise make a GET request
    const localData = localStorage.getItem('posts');
    if (localData) {
      console.log(localData);

      this.posts = JSON.parse(localData);
      console.log('Get Data: ', this.posts);

    } else {
      this.fetchAPI.getData().subscribe(posts => {
        this.posts = posts;
        localStorage.setItem('posts', JSON.stringify(posts));
      });
    }
  }

  addPost() {
    // Add a new post and store in local storage
    const newPostData = { title: this.newPost };
    this.fetchAPI.postData(newPostData).subscribe(post => {
      this.posts.push(post);
      localStorage.setItem('posts', JSON.stringify(this.posts));
      this.newPost = '';
    });
  }

  deletePost(id: number) {
    // Delete a post by ID and update local storage
    this.fetchAPI.deleteData(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      localStorage.setItem('posts', JSON.stringify(this.posts));
    });
  }

}
