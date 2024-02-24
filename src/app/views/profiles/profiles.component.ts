import { Component } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {

  profiles : Profile[] = [
    new Profile("Josh Brocato", "Juior"),
    new Profile("Chris Maxon", "Sophomore"),
    new Profile("Adrien Howard", "Junior")
  ]
}
