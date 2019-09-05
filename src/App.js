import React from 'react';
import './App.css';

const products = require('./data/products.json');

function App() {

	console.log(products);

	return (
		<div className="App">
			{products.map(product => (
				<div key={product.productId}>
					<strong>{product.productName}</strong>
					<br/>
					<br/>
				</div>
			))}
		</div>
	);
}

export default App;
