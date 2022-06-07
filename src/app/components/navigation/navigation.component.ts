import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  /**
 * The logged in user. Null, if there is no logged in user.
 */

    @Input() userInput?: User;

    @Output() loginEvent = new EventEmitter<User>();

    /**
    * Get the display name of the logged in user. First name abbreviated (e.g. Pro Gamer -> P. Gamer).
    * @returns
    */

     public getDisplayName(): string {
      let name: string = '';

      if (this.userInput) {
          name = this.userInput.firstName[0].toUpperCase();
          name += '. ';

          name += this.userInput.lastName[0].toUpperCase();
          name += this.userInput.lastName.substring(1).toLowerCase();
      }
      return name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
