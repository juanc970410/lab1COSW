import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        public authService: AuthService,
        public router: Router
      ) {
        if (!this.authService.isLoggedIn()) {
          this.router.navigate(['/']);
        }
      }

      isLoggedIn() {
        return this.authService.isLoggedIn();
      }

      signOut() {
        this.authService.signOut();
      }
  title = 'app';
}
