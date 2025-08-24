import React from 'react';
import styles from './TableRowItem.module.css';

interface Props {
  value: string;
}

const TableRowItem: React.FC<Props> = ({ value }) => {
  return <div className={styles.row__item}>{value}</div>;
};

export default TableRowItem;
