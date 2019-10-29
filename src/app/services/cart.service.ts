import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  endPoint = 'http://localhost:8000/api/cliente';

  constructor(private http: HttpClient) {

  }

  create(product) {
    this.items.push(product);
  }

  getList()  {
    return this.items;
  }

  public getList2(): Observable<any>  {
    return this.http.get<any>(`${this.endPoint}`);
  }

  removeAll() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

    public add(data): Observable<any> {
        return this.http.post<any>(`${this.endPoint}`, data);
    }
    public update(id, data): Observable<any> {
        return this.http.put<any>(`${this.endPoint}/${id}`, data);
    }
    public detele(id): Observable<any> {
        return this.http.delete<any>(`${this.endPoint}/${id}`);
    }

  
}
