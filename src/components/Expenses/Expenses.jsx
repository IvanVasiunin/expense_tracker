import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from 'components/Card/Card';
import ExpenseFilter from 'components/ExpenseFilter/ExpenseFilter';

const Expenses = props => {
  const expenses = props.items;
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = val => {
    setFilteredYear(val);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYear={yearChangeHandler}
      />
      {expenses.map(item => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
