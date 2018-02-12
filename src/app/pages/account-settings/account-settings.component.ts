import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor( @Inject(DOCUMENT) private _document, private _settings: SettingsService) { }

  ngOnInit() {
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

}
