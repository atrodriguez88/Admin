import { Injectable } from '@angular/core';
import { resolve } from 'q';

@Injectable()
export class UpLoadFileService {

  // The code is in JS plain becuase Angular don't support work with Files

  constructor() { }

  upLoad(file: File, type: string, id: string) {

    let promise = new Promise((res, rej) => {

      // I send by AJAX
      let fromData = new FormData();
      let xhr = new XMLHttpRequest();

      // File Data
      fromData.append('keyBody', file, file.name);
      // Peticion AJAX
      xhr.onreadystatechange = () => {

        // I used only this state when the peticion is UP, but I can used other states(EX: loading)
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('File UpLoad');
            resolve(xhr.response);
          } else {
            console.log('File UpLoad Fail !!!!');
            rej(xhr.response);
          }
        }
      };

      let urlBase = `http://address.com`;  // Address Example
      let urlService = urlBase + `/upload/` + type + `/` + id; // Example

      xhr.open(`PUT`, urlService, true);
      xhr.send(fromData);
    });





  }

}
