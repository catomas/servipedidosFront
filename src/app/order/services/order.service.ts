import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order, OrderResponse } from '../../interfaces/interfaces';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  create(order: Order) {
    const url = `${this.baseUrl}/order/save`;
    const body = order;

    return this.http.post<OrderResponse>(url, body);
  }

  list() {
    const url = `${this.baseUrl}/order/list`;
    return this.http.get<OrderResponse>(url).pipe(map((resp) => resp.orders));
  }

  show(id: string) {
    const url = `${this.baseUrl}/order/show/${id}`;
    return this.http.get<OrderResponse>(url).pipe(
    
      map((resp) => resp),
      catchError(err => of(err))
    );
  }

  update(order:Order, id: string){
    const url = `${this.baseUrl}/order/update/${id}`
    const body = order;

    return this.http.put<OrderResponse>(url, body);
  }

  delete(id: string){
    const url = `${this.baseUrl}/order/delete/${id}`

    return this.http.delete<OrderResponse>(url)
  }


}
