import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
    this.changeIslogin();
  }

  changeIslogin(){
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else{
        this.isLogin = false;
      }
    })
  }
  logout() {
    this._AuthService.userData.next(null);
    this._AuthService.logOut();
  }
}
