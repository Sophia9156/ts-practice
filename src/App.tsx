import Header from 'components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import CreateRoutes from 'routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CreateRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;