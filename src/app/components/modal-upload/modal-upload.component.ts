import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  modal: boolean = false;
  data: File = null;
  dataTemporary: any;

  constructor() { }

  ngOnInit() {
  }

  selectData(event) {

    console.log(event);

    if (!event.target.files[0]) {
      this.data = null;
      return;
    }

    if (event.target.files[0].type.indexOf('image') < 0) {
      this.data = null;
      swal(`Only Image`, `It is not a image`, `error`);
      return;
    }

    this.imgTemp();

    this.data = event.target.files[0];
    console.log(this.data);
  }

  imgTemp() {
    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(event.target.files[0]);

    reader.onloadend = () => {
      console.log(reader.result);
      this.imgTemporary = reader.result;
    }
  }

}
