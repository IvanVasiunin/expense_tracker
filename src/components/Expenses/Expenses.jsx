import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from 'components/Card/Card';

const Expenses = (props) => {
  const expenses = props.items;

  return(
    <Card className='expenses'>
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
  )
}

export default Expenses