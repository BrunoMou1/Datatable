import { useEffect, useState } from 'react';
import { useServer } from '../../hooks/context';
import api from '../../services/api'
import './styles.css';


function Tabela() {
  const { server, setServer } = useServer()
  const [data, setData] = useState([])

  function handleSelectData(id) {
    let dataExist = server.some(item => item.id_vm === id)

    if (dataExist) {
      const newItemData = server.filter(item => item.id_vm !== id)
      setServer(newItemData)

    } else {
      const itemData = data.filter(item => item.id_vm === id)
      setServer([...server, ...itemData])
    }
  }

  async function loadData() {
    const response = await api.get('servers')
    setData(response.data)
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="container">
        <div className="table">
          <div className="tableHeader">
            <p>Tabela de servidores</p>
          </div>
          <div className="tableContent">
            <table>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Hostname</th>
                  <th>Memória</th>
                  <th>vCPUs</th>
                  <th>Disco</th>
                  <th>IP</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id_vm}>
                    <td>
                      <input
                        type="checkbox"
                        onClick={() => handleSelectData(item.id_vm)}
                        className="checkbox"
                      />
                    </td>
                    <td>{item.hostname}</td>
                    <td>{item.configuracao.memoryProvisioned} GB</td>
                    <td>{item.configuracao.cpuProvisioned} vCPUs</td>
                    <td>{item.configuracao.totalDiskGB} GB</td>
                    <td>{item.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabela;
