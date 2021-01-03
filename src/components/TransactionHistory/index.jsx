import React from "react";
import PropTypes from "prop-types";
import styles from "./transactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          <th className={styles.cell}>Type</th>
          <th className={styles.cell}>Amount</th>
          <th className={styles.cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.row} key={id}>
              <td className={styles.cell}>{type}</td>
              <td className={styles.cell}>{amount}</td>
              <td className={styles.cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
