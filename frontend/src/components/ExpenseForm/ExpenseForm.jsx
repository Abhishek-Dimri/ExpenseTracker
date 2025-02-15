import React, { useState } from 'react';
import styles from './ExpenseForm.module.css';
import GlowingButton from '../common/GlowingButton';

const ExpenseForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { title, amount: parseFloat(amount), category, date };
    onSubmit(expenseData); // Pass data to parent component
    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <GlowingButton type="submit" ariaLabel="Login">
          {"Submit"}
        </GlowingButton>
    </form>
  );
};

export default ExpenseForm;