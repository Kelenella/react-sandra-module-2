export function ProductList({ products, onDeleteProduct }) {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.size}</p>
              <button type="button" onClick={() => onDeleteProduct(product.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
