import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="iphone" price="40000 tk"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
