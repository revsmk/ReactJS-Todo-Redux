import './App.css';
import { Provider } from "react-redux";
import store from "./components/store"
import Todo from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <Todo /> 
    </Provider>
  );
}

export default App;
