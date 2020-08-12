import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: {
    name: string,
    userName: string,
    email: string,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    const observable = this.authService.getProfile();
    observable.subscribe((data: { user: { name: string; userName: string; email: string; }; }) => {
      this.user = data.user;
    }, (err: any) => {
      console.log(err);
    });
  }

  onEditSubmit(): void {
    const observable = this.authService.editUser(this.user);
    observable.subscribe((data: any) => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/profile']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/edit']);
      }
    }, (err: any) => {
      console.log(err);
    });
  }
}
