import Header from 'components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import CreateRoutes from 'routes/Routes';
import { addListener, launch } from 'devtools-detector';

const view = document.createElement('div');
document.body.appendChild(view);

function App() {
  addListener(
    isOpen => {
      if (isOpen) {
        alert("No Console is available");
      } else {
        console.log("Console is closed");
      }
    }
  );
  launch();

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