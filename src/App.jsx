import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CardContextProvider from "./store/shoping-cart-context.jsx";
function App() {
  return (
    <CardContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CardContextProvider>
  );
}

export default App;
