import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1 className='h1'>Todo App</h1>
      <Card title="Card No.1" button="Go somewhere"/>
      <Card title="Card No.2" button="Learn More"/>
    </div>
  );
}

export default App;
