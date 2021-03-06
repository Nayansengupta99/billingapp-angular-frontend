import { Billing } from './billing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = "https://billing-restapi.herokuapp.com/bill/"
  constructor(private http: HttpClient) { }

  getAllBills(): Observable<Billing[]> {
    return this.http.get<Billing[]>(`${this.baseUrl}`);
  }

  createBill(bill: Billing): Observable<Object> {
    return this.http.post(`${(this.baseUrl) + "save"}`, bill);
  }
  getAllBillsById(billId: number) {
    return this.http.get(`${(this.baseUrl) + "total/" + billId}`)
  }

  getBillById(id: number): Observable<Billing> {
    return this.http.get<Billing>(`${(this.baseUrl) + id}`)
  }

  updateBill(id: number, bill: Billing): Observable<Object> {
    return this.http.put(`${(this.baseUrl) + "update/" + id}`, bill);
  }

  deleteBill(id: number): Observable<Object> {
    return this.http.delete(`${(this.baseUrl) + "delete/" + id}`, { responseType: 'text' })
  }

}
