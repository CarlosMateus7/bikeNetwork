import '../styles/App.css';
import { BikeMap } from '../components/map';
import { useNetworks } from '../hooks/useNetworks';

function App() {
  const {
    data: {networks},
    handlers:{numberOfNetworksPerCountry},
    error:{error}
  } = useNetworks();

  return (
    <div className='App'>
      <h1>Bike Network</h1>
      <div>
        {error ? (
          <li>{error.error}</li>
        ) : networks && (
         <BikeMap networks={networks} numberOfNetworksPerCountry={numberOfNetworksPerCountry}/>
        )}
      </div>
    </div>
  );
}

export default App;
