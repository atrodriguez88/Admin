import { Component, OnInit } from '@angular/core';

import * as swal from 'sweetalert';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  users: any[] = []; // Deberia ser un User del Modelo
  desde: number = 2;
  usersTem: any[] = [];

  loading: boolean = false;

  constructor() {
    // Invented data
    this.users = [
      {
        Images: 'No Image',
        Email: 'test0@test.com',
        Name: 'Test0Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
      {
        Images: 'No Image',
        Email: 'test1@test.com',
        Name: 'Test1Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
      {
        Images: 'No Image',
        Email: 'test2@test.com',
        Name: 'Test2Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
      {
        Images: 'No Image',
        Email: 'test3@test.com',
        Name: 'Test3Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
      {
        Images: 'No Image',
        Email: 'test4@test.com',
        Name: 'Test4Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
      {
        Images: 'No Image',
        Email: 'test5@test.com',
        Name: 'Test5Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
      {
        Images: 'No Image',
        Email: 'test6@test.com',
        Name: 'Test6Name',
        Role: 'Admin',
        Auth: 'google|Facebook|Others',
      },
    ];
  }

  ngOnInit() {
    this.usersTem.push(this.users[0]);
    this.usersTem.push(this.users[1]);
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    setTimeout(() => {

      // call services users
      // Ex this._userService.loadUsersService().subscribe(res=>{this.users = res});

      this.loading = false;
    }, 2000);

  }

  changeUsers(step: number) {
    // pagination I will fix pagination

    this.usersTem = [];

    if (step < 0) {

      if ((this.desde + step) <= 0) {

        for (let i = 0; i < this.desde; i++) {
          this.usersTem.push(this.users[i]);
        }
        this.desde = 2;
      }
      else {
        for (let i = this.desde; i < this.desde + 2; i++) {
          this.usersTem.push(this.users[i]);
        }
        this.desde += 2;
      }
    }
    else {
      if ((this.desde + step) > this.users.length) {

        for (let i = this.users.length - 2; i < this.users.length; i++) {
          this.usersTem.push(this.users[i]);
        }
        this.desde = this.users.length - 3;
      }
      else {
        for (let i = this.desde; i < this.desde + 2; i++) {
          this.usersTem.push(this.users[i]);
        }
        this.desde += 2;
      }
    }

    return this.usersTem;
  }

  findUser(term: string) {
    console.log(term);
    this.usersTem = [];
    if (term.length <= 0) {
      return;
    }
    else {
      for (const user of this.users) {
        if (user.Name.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
          this.usersTem.push(user);
        }
      }
      return this.usersTem;
    }
  }

  deleteUser(user) {
    console.log(user);

    this.users.forEach(us => {
      if (user.Name === us.Name) {
        const index = this.users.indexOf(us);
        console.log(index);
        this.users.splice(index, 1);
      }
    });
    // console.log(this.users);
    this.modalDelete();

  }

  update() {
    this.desde = 2;
    this.usersTem = [];
    this.usersTem.push(this.users[0]);
    this.usersTem.push(this.users[1]);
  }

  modalDelete() {
    swal(`What do you want to delete?`, {
      buttons: {
        catch: {
          text: `Yes`,
          value: `delete`,
        }
        cancel: `No`,
      },
    })
      .then((value) => {
        switch (value) {
          case `delete`:
            this.update();
            swal("User", "", "success");
            break;
        }
      });
  }

}
