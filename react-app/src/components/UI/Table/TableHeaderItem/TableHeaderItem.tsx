import React from 'react';
import styles from './TableHeaderItem.module.css';

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

const TableHeaderItem: React.FC<Props> = ({ title, active, onClick }) => {
  return (
    <div className={styles.header__item} onClick={onClick}>
      {title} {active && <span className={styles.item__arrow}>▲</span>}
    </div>
  );
};

export default TableHeaderItem;
