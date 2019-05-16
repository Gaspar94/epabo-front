import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { OportunidadesResponse} from './oportunidadesResponse';

import { Storage } from  '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesAllService {
  SERVER_ADDRESS:  string  =  'http://localhost:8080/api/oportunidads';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  getOportunidades(){
    return this.httpClient.get(this.SERVER_ADDRESS);
  }


}
