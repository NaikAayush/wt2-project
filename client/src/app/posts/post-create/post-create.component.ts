import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { TextClassifierService } from 'src/app/services/tf/text-classifier.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // title = 'app-root';
  id: string = '';
  username: string = 'AayushNaik';
  title: string = '';
  userpost: string = '';
  Data;
  constructor(
    private newService: PostService,
    private textClassifier: TextClassifierService,
    private _snackBar: MatSnackBar
  ) {}

  valbutton = 'Save';

  ngOnInit() {
    this.newService.getPosts().subscribe((data) => (this.Data = data));
  }

  onSave = function (user: boolean) {
    this.runModel(this.userpost).then((res) => {
      console.log(res);
      if (res == false) {
        user['mode'] = this.valbutton;
        this.newService.addPost(user).subscribe(
          (data) => {
            this.ngOnInit();
          },
          (error) => (this.errorMessage = error)
        );
      } else {
        this.openSnackBar('Content too toxic', 'Close');
      }
    });
  };

  edit = function (post_edit) {
    this.id = post_edit._id;
    this.title = post_edit.title;
    this.username = post_edit.username;
    this.userpost = post_edit.userpost;
    this.valbutton = 'Update';
  };

  delete = function (id) {
    this.newService.deletePost(id).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => (this.errorMessage = error)
    );
  };

  async runModel(userpost) {
    const arr = userpost.split('.');
    const obj = await this.textClassifier.textClassifier(arr);
    // .then((toxicStatus) => {
    //   if (toxicStatus) {
    //     console.log('Content Toxic');
    //   } else {
    //     console.log('Content good to go');
    //   }
    // });
    console.log(obj.toxicStatus);
    return obj.toxicStatus;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
