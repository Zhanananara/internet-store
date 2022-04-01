import "./App.css";
import MyRoutes from "./MyRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <MyRoutes />
    </ProductContextProvider>
  );
}

export default App;
