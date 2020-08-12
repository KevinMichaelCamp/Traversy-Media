import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  userName: string;
  email: string;
  password: string;
  confirm: string;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(): boolean {
    const user = {
      name: this.name,
      userName: this.userName,
      email: this.email,
      password: this.password,
      pw_confirm: this.confirm
    };

    // Validations
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please enter valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if (!this.validateService.validatePasswords(user.password, user.pw_confirm)) {
      this.flashMessage.show('Password must match confirmation', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register User
    const observable = this.authService.registerUser(user);
    observable.subscribe((data: { success: any; msg: string; }) => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    }, (err: any) => {
      console.log(err);
    });
  }
}
