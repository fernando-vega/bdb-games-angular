import { PlatformsService } from './../../core/services/platforms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  public platforms: any;
  public games: any;

  constructor(private platformsServices: PlatformsService) { }

  ngOnInit(): void {
    this.getPlatforms();
  }

  public getPlatforms() {
    this.platformsServices.getAllPlatforms()
    .then(async value => {
      this.platforms = value.results;
    });
  }
}
