import { Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [{
    path: 'transactions',
    component: TransactionsComponent
},{
    path: 'summary',
    component: SummaryComponent
},{
    path: '',
    redirectTo: 'transactions',
    pathMatch: 'full'
}];
