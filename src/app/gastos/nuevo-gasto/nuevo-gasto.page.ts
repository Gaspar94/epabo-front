import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient } from  '@angular/common/http';
import { Router } from  "@angular/router";
import {Igasto} from '../igasto';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.page.html',
  styleUrls: ['./nuevo-gasto.page.scss'],
})
export class NuevoGastoPage implements OnInit {

  SERVER_ADDRESS:  string  =  'http://localhost:8080/api/gastos';

  constructor(private  httpClient:  HttpClient, private storage: Storage, private route: Router) { }

  ngOnInit() {
  }

  gasto(form){
    console.log(form);
    this.httpClient.post(`${this.SERVER_ADDRESS}`, form.value).subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
    this.route.navigateByUrl('/gastos');
  }

}
