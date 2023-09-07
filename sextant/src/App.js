
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Ipshow from './components/Ipshow';

function App() {
  return (
    <div className="App">
    <Banner/>
    <Exhibit name={'Network'}>
      <Ipshow ipAddressType={'v4'}/>
      <Ipshow ipAddressType={'v6'}/>
      </Exhibit>
      
    </div>
  )
}

export default App;
