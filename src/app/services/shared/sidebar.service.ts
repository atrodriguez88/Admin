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
    },
    {
      title: 'Maintenance',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Users', url: '/users' },
        { title: 'Hotels', url: '/hotels' },
        { title: 'Workers', url: '/workers' }
      ]
    }
  ];

  constructor() { }

}
