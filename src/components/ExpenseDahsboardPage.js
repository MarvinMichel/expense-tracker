import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import AddExpenseButton from './AddExpenseButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ExpenseDashboardPage = () => (
  <React.Fragment>
    <header className="page-header">
      <ExpenseListFilters />
      <ExpenseSummary />
    </header>
    <ExpenseList />
    <AddExpenseButton />
    <ToastContainer />
  </React.Fragment>
);

export default ExpenseDashboardPage;
