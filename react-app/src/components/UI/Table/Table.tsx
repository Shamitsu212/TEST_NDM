import { useState } from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableRowMap from './TableRowMap/TableRowMap';

import styles from './table.module.css';

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

function Table({ routes }: Props) {
  const [sortedRoutes, setSortedRoutes] = useState<Route[]>([...routes]);
  const [activeSort, setActiveSort] = useState<string | null>(null);

  function ipToNumber(ip: string): number {
    return ip
      .split('.')
      .map(Number)
      .reduce((acc, octet) => (acc << 8) + (isNaN(octet) ? 0 : octet), 0);
  }

  function sortByAddress() {
    setSortedRoutes([...sortedRoutes].sort((a, b) => ipToNumber(a.address) - ipToNumber(b.address)));
    setActiveSort('address');
  }

  function sortByGateway() {
    setSortedRoutes([...sortedRoutes].sort((a, b) => ipToNumber(a.gateway) - ipToNumber(b.gateway)));
    setActiveSort('gateway');
  }

  function sortByInterface() {
    setSortedRoutes([...sortedRoutes].sort((a, b) => a.interface.localeCompare(b.interface)));
    setActiveSort('interface');
  }

  return (
    <div className={styles.table}>
      <TableHeader
        activeSort={activeSort}
        onSortAddress={sortByAddress}
        onSortGateway={sortByGateway}
        onSortInterface={sortByInterface}
      />
      <div className={styles.tableRowContainer}>
        <TableRowMap routes={sortedRoutes} />
      </div>
    </div>
  );
}

export default Table;
