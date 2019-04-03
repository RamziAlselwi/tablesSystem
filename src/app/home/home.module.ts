import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule,
   MatCardModule, MatMenuModule, MatIconModule,
   MatButtonModule, MatButtonToggleModule, MatToolbarModule,
   MatDividerModule, MatListModule
   } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { LocalRequestComponent } from './local-request/local-request.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { TakeAwayComponent } from './take-away/take-away.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [DashboardComponent, LocalRequestComponent, BookingsComponent, DeliveryComponent, TakeAwayComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [ApiService],
})
export class HomeModule { }
