import React from 'react';
import TableHeaderItem from '../TableHeaderItem/TableHeaderItem';
import styles from './TableHeader.module.css';

interface Props {
  activeSort: string | null;
  onSortAddress: () => void;
  onSortGateway: () => void;
  onSortInterface: () => void;
}

const TableHeader: React.FC<Props> = ({ activeSort, onSortAddress, onSortGateway, onSortInterface }) => {
  return (
    <div className={styles.table__header}>
      <TableHeaderItem title="Адрес назначения" active={activeSort === 'address'} onClick={onSortAddress} />
      <TableHeaderItem title="Шлюз" active={activeSort === 'gateway'} onClick={onSortGateway} />
      <TableHeaderItem title="Интерфейс" active={activeSort === 'interface'} onClick={onSortInterface} />
    </div>
  );
};

export default TableHeader;
