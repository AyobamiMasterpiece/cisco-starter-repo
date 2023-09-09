
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Ipshow from './components/Ipshow';
import Latency from './components/Latency';

function App() {
  return (
    <div className="App">
    <Banner/>
    <Exhibit name={'Network'}>
      <Ipshow ipAddressType={'v4'}/>
      <Ipshow ipAddressType={'v6'}/>
      </Exhibit>
      <Exhibit>
        <Latency/>
        </Exhibit>
    </div>
  )
}

export default App;
