import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor(private _settings: SettingsService) { }

  ngOnInit() {
    this.putCheck();
  }

  changeTheme(theme: string, link: any) {
    console.log(theme, link);

    this._settings.applyTheme(theme);

    this.changeCheck(link);

  }

  changeCheck(link: any) {
    const elementos: any = document.getElementsByClassName('selector');
    for (const elem of elementos) {
      elem.classList.remove('working');
    }
    link.classList.add('working');
  }

  putCheck() {
    const elementos: any = document.getElementsByClassName('selector');
    const theme = this._settings.setting.theme;
    for (const elem of elementos) {
      if (elem.getAttribute('data-theme') === theme) {
        elem.classList.add('working');
        break;
      }
    }
  }

}
