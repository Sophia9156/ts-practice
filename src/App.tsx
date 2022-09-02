import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import MyForm from './components/MyForm';
import ReducerSample from './components/ReducerSample';
import { SampleProvider } from './context/SampleContext';

function App() {
  const handleClick = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  const onSubmit = (form: {name: string; description: string;}) => {
    console.log(form);
  };

  return (
    <div className="App">
      <Greetings name="Sophia" onClick={handleClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
}

export default App;