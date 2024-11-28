export default function Guitar({guitar, addToCart}) {

    const { id, name, image, description, price } = guitar;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{ name }</h3>
                <p>{ description }</p>
                <p className="fw-black text-primary fs-3">${ price }</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)} // Evento onClick // handle es una convención para nombrar funciones que manejan eventos. // Caundo se tiene argumentos se debe de usar una función anónima para que no se ejecute la función en el momento de renderizar, si no hasta que se haga clic. // prevCart es el estado anterior, y se le agrega la guitarra al final del array (lo podemos nombrar como queramos, sin embargo, agregar prev es una convención que tiene react).
                >Agregar al Carrito</button>
            </div>
        </div>
    );

}