import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-inner-blog',
  templateUrl: './inner-blog.component.html',
  styleUrls: ['./inner-blog.component.css'],
})
export class InnerBlogComponent {
  constructor(
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  innBlogData = [];
  blogId = '';
  blogRes: any = '';

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.blogId = params.id;
      this.getBlog();
    });
  }

  getBlog() {
    this.ds.getBlogbyId(this.blogId).subscribe((res: any) => {
      console.log(res);
      this.blogRes = res;
    });
  }
}
