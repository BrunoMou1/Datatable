import Sumario from '../../components/Sumario';
import Tabela from '../../components/Tabela';
import { ServerProvider } from '../../hooks/context';

function Home() {
  return (
    <ServerProvider>
      <Sumario />
      <Tabela />
    </ServerProvider>
  );
}

export default Home;