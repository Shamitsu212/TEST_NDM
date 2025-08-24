import { useState } from 'react';
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
    const parts = ip.split('.');

    return parts
      .map(Number)
      .reduce((acc, octet) => (acc << 8) + (isNaN(octet) ? 0 : octet), 0);
  }

  function sortByAddress() {
    const newSortedRoutes = [...sortedRoutes].sort((a, b) =>
      ipToNumber(a.address) - ipToNumber(b.address)
    );
    setSortedRoutes(newSortedRoutes);
    setActiveSort('address');
  }

  function sortByGateway() {
    const newSortedRoutes = [...sortedRoutes].sort((a, b) =>
      ipToNumber(a.gateway) - ipToNumber(b.gateway)
    );
    setSortedRoutes(newSortedRoutes);
    setActiveSort('gateway');
  }

  function sortByInterface() {
    const newSortedRoutes = [...sortedRoutes].sort((a, b) =>
      a.interface.localeCompare(b.interface)
    );
    setSortedRoutes(newSortedRoutes);
    setActiveSort('interface');
  }

  return (
    <>
      <div className={styles.table}>
        <div className={styles.table__header}>
          <div className={styles.header__item} onClick={sortByAddress}>
            Адрес назначения {activeSort === 'address' && <span className={styles.item__arrow}>▲</span>}
          </div>
          <div className={styles.header__item} onClick={sortByGateway}>
            Шлюз {activeSort === 'gateway' && <span className={styles.item__arrow}>▲</span>}
          </div>
          <div className={styles.header__item} onClick={sortByInterface}>
            Интерфейс {activeSort === 'interface' && <span className={styles.item__arrow}>▲</span>}
          </div>
        </div>
        {sortedRoutes.map(route => (
          <div className={styles.table__row} key={route.uuid}>
            <div className={styles.row__item}>{route.address}</div>
            <div className={styles.row__item}>{route.gateway}</div>
            <div className={styles.row__item}>{route.interface}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Table;