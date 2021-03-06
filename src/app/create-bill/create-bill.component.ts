import { DisableRightClickDirective } from './../disable-right-click.directive';
import { BillingService } from './../billing.service';
import { Component, OnInit } from '@angular/core';
import { Billing } from '../billing';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})




export class CreateBillComponent implements OnInit {

  bill: Billing = new Billing();

  constructor(private billingService: BillingService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBill() {
    this.bill.customerId = 6

    this.billingService.createBill(this.bill).subscribe(data => {
      console.log(data);
      this.goToAllItems();
    },
      error => console.log(error));
  }

  goToAllItems() {
    this.router.navigate(['/yourbills'])
  }
  onSubmit() {
    console.log(this.bill);
    this.saveBill()
  }
}
