import React from 'react';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import styles from './AddExpense.module.css';

const AddExpense = () => {
  const handleSubmit = (expenseData) => {
    console.log('New Expense:', expenseData);
    // TODO: Call API to add expense
  };

  return (
    <div className={styles.container}>
      <h1>Add New Expense</h1>
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddExpense;