import css from './TransactionHistory.module.css';
import { FcMoneyTransfer } from 'react-icons/fc';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>
              <FcMoneyTransfer /> {amount}
            </td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
