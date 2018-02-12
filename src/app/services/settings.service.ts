import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  setting: Setting = {
    theme: `default`,
    urlTheme: `assets/css/colors/default.css`
  };

  constructor( @Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    console.log(`Save Settings`);
    localStorage.setItem(`settings`, JSON.stringify(this.setting));
  }

  loadSettings() {
    if (localStorage.getItem(`settings`) {
      this.setting = JSON.parse(localStorage.getItem(`settings`));
      this.applyTheme(this.setting.theme);
      console.log(`Load Settings`);
    }
    else {
      console.log(`Load Settings by Default`);
      this.applyTheme(this.setting.theme);
    }
  }

  applyTheme(theme: string) {

    this.setting.urlTheme = `./assets/css/colors/${theme}.css`;
    this.setting.theme = theme;

    this._document.getElementById('theme').setAttribute('href', this.setting.urlTheme);

    this.saveSettings();
  }

}

interface Setting {
  urlTheme: string;
  theme: string;
}
