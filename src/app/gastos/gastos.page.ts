import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient } from  '@angular/common/http';



@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  SERVER_ADDRESS:  string  =  'http://localhost:8080/api/gastos';

  gastos:any = [];

  constructor(private  httpClient:  HttpClient, private storage: Storage) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("IM here");
    this.httpClient.get(`${this.SERVER_ADDRESS}`).subscribe(data => {
      console.log(data);
      console.log(data['_body']);
      this.gastos = data;
     }, error => {
       console.log("ERROR");
      console.log(error);
    });
  }

}
