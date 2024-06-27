import { Injectable } from "@angular/core";
import { Transaction } from "../interfaces/transaction.interface";

@Injectable({
    providedIn: 'root'
})

export class TransactionsService {

    transactions: Transaction[] = [];
    currentId: number = 0;

    constructor() {
        let data = localStorage.getItem('transactions');
        this.transactions = data ? JSON.parse(data) : [];
    }

    saveTransaction() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }

    getById(id: number) {
        return this.transactions.find(d => d.id == id);
    }

    editTransaction(editData: Transaction) {
        this.transactions = this.transactions.map(d => {
            if(d.id === editData.id) {
                console.log(editData)
                return {...d, description: editData.description, amount: editData.amount, date: editData.date, type: editData.type};
            }
            return d;
        });
        this.saveTransaction()
    }

    addNewTransaction(newData: Transaction) {
        this.currentId += 1;
        newData.id = this.currentId;
        this.transactions.push(newData);
        this.saveTransaction();
    }

    deleteTransaction(id: number) {
        this.transactions = this.transactions.filter(d => d.id !== id);
        this.saveTransaction();
    }

    getAllTransaction() {
        return this.transactions;
    }

}