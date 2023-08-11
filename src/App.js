import logo from './logo.svg';
import './App.css';
import ColorPicker from './Component/ColorPicker';

function App() {
  return (
    <div>
      <h1>Minimal Color Picker</h1>
      <ColorPicker title="Red" color="#FF0000" />
      <ColorPicker title="Green" color="#00FF00" />
      <ColorPicker title="Blue" color="#0000FF" />
      <ColorPicker title="Black" color="#000000" />
      <ColorPicker title="Maroon" color="#800000" />
      <ColorPicker title="Navy" color="#000080" />
      <ColorPicker title="Fuchsia" color="#FF00FF" />
      <ColorPicker title="Purple" color="#800080" />
    </div>
  );

}

export default App;
