import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ExpenseDashboardPage = () => (
  <React.Fragment>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
    <ToastContainer />
  </React.Fragment>
);

export default ExpenseDashboardPage;
