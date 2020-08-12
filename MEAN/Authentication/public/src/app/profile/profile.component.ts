import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: object;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit(): void {
    const observable = this.authService.getProfile();
    observable.subscribe((data: { user: object; }) => {
      this.user = data.user;
    }, (err: any) => {
      console.log(err);
    });
  }

  deleteUser(): void {
    const observable = this.authService.deleteUser();
    observable.subscribe((data: { success: any; msg: string; }) => {
      if (data.success) {
        this.authService.logout();
        this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/profile']);
      }
    }, (err: any) => {
      console.log(err);
    });
  }

}
