import './App.css';
import OrderForm from '../src/components/OrderForm'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <OrderForm />
      </header>
    </div>
  );
}

export default App;
