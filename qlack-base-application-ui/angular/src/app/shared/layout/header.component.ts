import {Component} from '@angular/core';
import {BaseComponent} from '../component/base-component';
import {AppConstants} from '../../app.constants';
import {QNgPubSubService} from '@qlack/qng-pub-sub';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {
  // The user email extracted from JWT.
  public userEmail: string;

  constructor(private qPubSubService: QNgPubSubService) {
    super();
  }

  getUserEmail(): string {
    return localStorage.getItem(AppConstants.JWT_STORAGE_NAME);
  }

  publishTestMessage() {
    this.qPubSubService.publish('QNotifications','A test message!!!');
  }
}
