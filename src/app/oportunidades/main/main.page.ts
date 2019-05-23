import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  SERVER_ADDRESS:  string  =  'http://localhost:8080/api/oportunidads/getForUser/0';

  constructor(private  httpClient:  HttpClient, private storage: Storage) { }

  oportunidades:any = [];

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("IM here");
    this.httpClient.get(`${this.SERVER_ADDRESS}`).subscribe(data => {
      console.log(data);
      this.oportunidades = data;
     }, error => {
       console.log("ERROR");
      console.log(error);
    });
  }

}
