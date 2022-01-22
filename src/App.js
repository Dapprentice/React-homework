import React from 'react';
import logo from './logo.svg';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components' 

const Div = styled.div`
  text-align: center;
  background-color: hsl(157, 61%, 44%);
  color: #cccccc;
`;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9000.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 330.99
        },
        {
          name: 'Circle',
          ticker: 'USDC',
          price: .999
        },
        {
          name: 'Avalanche',
          ticker: 'AVAX',
          price: 69.69
        },
      ]
    }
  }

  render() {
    return (
      <Div className="App">
        <header className="App-header">
          <img src={logo} alt="React logo" className="App-logo" />
          <h1 className="App-title">
            NFT Crypto DEX
          </h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
  
    );
  }

}
 
export default App;