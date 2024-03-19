import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart';


function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  return (
    <div className="App">
     <ShoppingCart products={products} />
    </div>
  );
}

export default App;
