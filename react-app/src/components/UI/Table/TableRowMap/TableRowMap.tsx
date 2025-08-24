import React from 'react';
import TableRowItem from '../TableRowItem/TableRowItem';
import styles from './TableRowMap.module.css';

interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

interface Props {
  routes: Route[];
}

const TableRowMap: React.FC<Props> = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <div className={styles.table__row} key={route.uuid}>
          <TableRowItem value={route.address} />
          <TableRowItem value={route.gateway} />
          <TableRowItem value={route.interface} />
        </div>
      ))}
    </>
  );
};

export default TableRowMap;
