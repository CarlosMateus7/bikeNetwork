import { render, fireEvent, screen } from '@testing-library/react';
import { Networks } from '../index';
import { Network } from '../../../types';

describe('Networks component', () => {
  const network: Network = {
    company: ['EMEL'],
    href: "site",
    location: {
      country: 'PT',
      city: 'Lisbon',
      latitude: 38.724954,
      longitude: -9.149334,
    },
    name: "Gira",
    id:"gira"
  };

  const numberOfNetworksPerCountry = 5;

  it('should make a Snapshot of the Networks component',()=>{
    const { asFragment } = render(
        <Networks network={network} numberOfNetworksPerCountry={numberOfNetworksPerCountry} />
      );
      expect(asFragment()).toMatchSnapshot();
    });

  it('should render L1 number of networks', () => {
    render(
      <Networks network={network} numberOfNetworksPerCountry={numberOfNetworksPerCountry} />
    );
    
    const renderOfNetworkText=screen.getByText(`${numberOfNetworksPerCountry}`);

    expect(renderOfNetworkText).toBeInTheDocument();
  });

  it('should render info for L2 Number of Stations text', () => {
    render(
      <Networks network={network} numberOfNetworksPerCountry={numberOfNetworksPerCountry} />
    );
  
    fireEvent.click(screen.getByText('L2'));
    const numberOfStations = screen.getByText(`Number of Stations (network):`)

    expect(numberOfStations).toBeInTheDocument();
  });

  it('should render info for L3 Country and City', () => {
    render(
      <Networks network={network} numberOfNetworksPerCountry={numberOfNetworksPerCountry} />
    );

    fireEvent.click(screen.getByText('L3'));

    expect(screen.getByText(`${network.location.country}`)).toBeInTheDocument();
    expect(screen.getByText(`${network.location.city}`)).toBeInTheDocument();
  });
});
