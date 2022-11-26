import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Feroze Dental Supplies</a>
      </header>
      <main>
        <h1>Featured products</h1>
        {data.products.map((product) => (
          <div>
            <img src={product.Image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
