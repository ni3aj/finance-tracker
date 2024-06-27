import { Component } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { Transaction } from '../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  transactions: Transaction[] = [];
  editMode: boolean = false;
  tForm: FormGroup = new FormGroup({
    id: new FormControl('', []),
    description: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  })

  constructor(private tService: TransactionsService) {
    this.initTransactions();
  }

  initTransactions() {
    this.transactions = this.tService.getAllTransaction();
  }

  editTransaction(id: number) {
    const editDetails = this.tService.getById(id);
    this.tForm.patchValue({
      id: editDetails?.id,
      description: editDetails?.description,
      amount: editDetails?.amount,
      date: editDetails?.date,
      type: editDetails?.type
    })
  }

  saveTransaction() {
    if(this.tForm.value.id) {
      this.tService.editTransaction(this.tForm.value);
    } else {
      this.tService.addNewTransaction(this.tForm.value);
    }    
    this.tForm.reset();
    this.initTransactions();
  }

  deleteTransaction(id: number) {
    this.tService.deleteTransaction(id);
    this.initTransactions();
  }
}
