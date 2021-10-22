import './App.css';
import OrderForm from '../src/components/OrderForm'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <header>
        <ToastContainer />
      </header>
      <body className="App-header">
        <OrderForm />
      </body>
    </div>
  );
}

export default App;
