import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { SummaryComponent } from './summary/summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransactionsComponent, SummaryComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finance-tracker';
}
