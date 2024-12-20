/* Importamos utilidades */
import { useState, useEffect } from "react";

/* Importamos Componentes */
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from "./data/db";


function App() {

	// State
	const [data, setData] = useState(db);
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		setCart(prevCart => [...prevCart, item]);
	}

  return (
    <>
        <Header />

		<main className="container-xl mt-5">
			<h2 className="text-center">Nuestra Colección</h2>
			<div className="row mt-5">
				{data.map((guitar) => (
					<Guitar
						key={guitar.id} // Key, siempre se le debe pasar un valor único.
						guitar={guitar} // Props guitar, sirve para pasar la información de la guitarra al componente Guitar.
						setCart={setCart} // Props setCart, sirve para pasar la función setCart al componente Guitar.
						addToCart={addToCart} // Pasamos la función addToCart.
					/>
				))}
			</div>
		</main>

		<footer className="bg-dark mt-5 py-5">
			<div className="container-xl">
				<p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
			</div>
		</footer>
    </>
  )
}

export default App
