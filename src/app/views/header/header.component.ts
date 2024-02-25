import { Component } from '@angular/core';
import { TempAuthService } from '../../services/temp-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(
    private tempAuthService: TempAuthService,
  ) { }

  isUserLoggedIn() {
    return this.tempAuthService.isUserLoggedIn();
  }

  logOut() {
    this.tempAuthService.logOut();
  }

}
