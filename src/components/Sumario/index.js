import { useEffect, useState } from 'react';
import { useServer } from '../../hooks/context';
import Header from '../Header';
import './styles.css';

function Sumario() {
  const { server } = useServer()
  const [memory, setMemory] = useState()
  const [vCPU, setVCPU] = useState()
  const [disk, setDisk] = useState()

  const quantityOfServers = server.length

  function calcDisk() {
    server.reduce((acc, item) => {
      acc += item.configuracao.totalDiskGB
      setDisk(acc)
      return acc
    }, 0)
    if (quantityOfServers === 0) {
      setDisk(0)
    }
  }

  function calcvCPU() {
    server.reduce((acc, item) => {
      acc += item.configuracao.cpuProvisioned
      setVCPU(acc)
      return acc
    }, 0)
    if (quantityOfServers === 0) {
      setVCPU(0)
    }
  }

  function calcMemory() {
    server.reduce((acc, item) => {
      acc += item.configuracao.memoryProvisioned
      setMemory(acc)
      return acc
    }, 0)
    if (quantityOfServers === 0) {
      setMemory(0)
    }
  }

  useEffect(() => {
    calcDisk()
    calcvCPU()
    calcMemory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [server])

  return (
    <>
      <Header />
      <div className="container">
        <div className="summary">
          <div className="summaryHeader">
            <p>Sumário dos recursos dos servidores</p>
          </div>
          <div className="content">
            <div className="left">
              <p className="content-item-left">Servidores selecionados</p>
              <p className="content-item-left">Total de Memória</p>
              <p className="content-item-left">Total de CPU</p>
              <p className="content-item-left">Total de Discos</p>
            </div>
            <div className="right">
              <p className="content-item-right">{quantityOfServers} servidores selecionados</p>
              <p className="content-item-right">{memory} GB</p>
              <p className="content-item-right">{vCPU} vCPUs</p>
              <p className="content-item-right">{disk} GB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sumario;
