import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SegmentModule } from 'ngx-segment-analytics';
import { SegmentService } from 'ngx-segment-analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  constructor(private _segment: SegmentService) {
    console.log('Inital...');
  }

  public ngOnInit() {
    this._segment.track('load an hero')
        .then(() => console.log("Event sended"));
}
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      SegmentModule.forRoot({
        apiKey: 'n7Hn4QrEyqHB9KwOn9t9iX',
        debug: false,
        loadOnInitialization: true,
      }),
    ),
  ]
});
