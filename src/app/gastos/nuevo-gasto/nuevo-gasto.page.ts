import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient } from  '@angular/common/http';
import {Igasto} from '../igasto';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.page.html',
  styleUrls: ['./nuevo-gasto.page.scss'],
})


export class NuevoGastoPage implements OnInit {

  SERVER_ADDRESS:  string  =  'http://localhost:8080/api/gastos';

  constructor(private  httpClient:  HttpClient, private storage: Storage) { }

  ngOnInit() {
  }

  gasto(form){
    //gasto.userId(this.storage.get("LOGIN"));
    return this.httpClient.post(`${this.SERVER_ADDRESS}`, form.value);
  }

}
