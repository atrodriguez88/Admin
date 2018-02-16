import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Primary',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Table', url: '/table' },
        { title: 'Graficas', url: '/graficas1' },
        { title: 'Promises', url: '/promises' },
        { title: 'Rxjs', url: '/rxjs' }
      ]
    }
  ];

  constructor() { }

}
