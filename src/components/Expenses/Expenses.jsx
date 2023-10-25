import { useState } from 'react';
import './Expenses.css';
import Card from 'components/Card/Card';
import ExpenseFilter from 'components/ExpenseFilter/ExpenseFilter';
import ExpensesList from 'components/ExpensesList/ExpensesList';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = val => {
    setFilteredYear(val);
  };

  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYear={yearChangeHandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
