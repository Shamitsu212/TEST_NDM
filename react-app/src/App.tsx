import './App.css'

import Table from './components/table' 

function App() {

  interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

const routes: Route[] = [
  { uuid: '1', address: '0.0.0.0', mask: '0.0.0.0', gateway: '192.168.1.1', interface: 'Подключение Ethernet' },
  { uuid: '2', address: '192.168.10.0', mask: '255.255.255.0', gateway: '0.0.0.0', interface: 'Гостевая сеть' },
  { uuid: '3', address: '10.0.0.0', mask: '255.0.0.0', gateway: '0.0.0.0', interface: 'Домашняя сеть' },
  { uuid: '4', address: '172.16.5.0', mask: '255.255.0.0', gateway: '0.0.0.0', interface: 'Подключение Ethernet' },
  { uuid: '5', address: '192.168.1.100', mask: '255.255.255.255', gateway: '0.0.0.0', interface: 'Подключение Ethernet' },
  { uuid: '6', address: '192.168.1.10', mask: '255.255.255.255', gateway: '192.168.1.1', interface: 'Подключение Ethernet' },
  { uuid: '7', address: '192.168.1.32', mask: '255.255.255.224', gateway: '192.168.1.1', interface: 'Подключение Ethernet' },
  { uuid: '8', address: '192.168.10.5', mask: '255.255.255.0', gateway: '192.168.10.1', interface: 'Гостевая сеть' },
];


  return (
    <>
      <Table routes={routes} />
    </>
  )
}

export default App
