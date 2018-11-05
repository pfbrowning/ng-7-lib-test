import { Component } from '@angular/core';
import { LoadingIndicatorService } from '@browninglogic/ng-loading-indicator';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-seven-lib-test';

  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  public showLoadingIndicator() {
    this.loadingIndicatorService.showLoadingIndicator();
    timer(2500).subscribe(() => this.loadingIndicatorService.hideLoadingIndicator());
  }
}
