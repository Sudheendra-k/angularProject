import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
public xyz: any;
  constructor() { }

  setData(data: any) {
    this.xyz = data;
    console.log('Data received in service:', data);
    localStorage.setItem('details',JSON.stringify(data));
  }
}
