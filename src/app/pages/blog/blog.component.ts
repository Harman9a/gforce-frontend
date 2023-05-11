import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(private ds: DataService) {
    this.getBlogs();
    this.getBlogsCat();
  }
  abc: any = [];

  blogTabs: any = [];
  blogPosts: any = [];

  getBlogs() {
    this.ds.getBlogs().subscribe((data: any) => {
      this.blogPosts = data;
      this.allCat(); // set by default values
    });
  }

  getBlogsCat() {
    this.ds.getBlogsCat().subscribe((data: any) => {
      this.blogTabs = data;
    });
  }

  onDelete(id: any) {
    this.abc = [];
    for (let h: any = 0; h < this.blogPosts.length; h++) {
      if (id == this.blogPosts[h].categoryId) {
        this.abc.push(this.blogPosts[h]);
      }
    }
  }

  allCat() {
    this.abc = this.blogPosts;
  }
}
