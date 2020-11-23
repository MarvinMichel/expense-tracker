import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
  <React.Fragment>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </React.Fragment>
);

export default ExpenseDashboardPage;
