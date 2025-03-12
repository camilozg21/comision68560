const ItemDetail = ({titulo, descripcion, stock, imagen}) => { 
    return(
        <>
        <h2>{titulo}</h2>
        <img src={imagen} />
        <p>{descripcion}</p>
        <p>stock disponible: {stock}</p>
        <button onClick={() => window.history.back()}>volver</button>
        </>
    )
}

export default ItemDetail