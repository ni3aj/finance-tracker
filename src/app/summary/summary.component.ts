import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { Transaction } from '../interfaces/transaction.interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  totalIncome!: number;
  totalExpenses!: number;
  balance!: number;
  transactions!: Transaction[];

  constructor(private tService: TransactionsService) {
    this.initSummary();
  }

  initSummary() {
    this.transactions = this.tService.getAllTransaction();
    this.totalIncome = this.transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    this.totalExpenses = this.transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    this.balance = this.totalIncome - this.totalExpenses;
  }

}
