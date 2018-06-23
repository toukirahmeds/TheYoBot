import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent, ProductsComponent, TransactionsComponent, AnalyticsComponent]
})
export class EcommerceModule { }
