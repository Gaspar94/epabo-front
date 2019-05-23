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
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append("Authorization",
                    "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU1ODY2NzcyMX0.n4mTl6i7TSiEt8EYi_zc8LLOjaiPD5LT75nxqyof15UMjZ4bk0tVihwiTuP5HD5wGSRPU9BWlzalzm1x97RbIg");
                    console.log(headers);
    //gasto.userId(this.storage.get("ACCESS_LOGIN"));
    console.log(form);
    this.httpClient.post(`${this.SERVER_ADDRESS}`, form.value,{headers}).subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
    this.route.navigateByUrl('/gastos');
  }

}
