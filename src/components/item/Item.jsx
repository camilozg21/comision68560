import { useNavigate } from "react-router-dom"


const Item = ({titulo, id, descripcion, stock, imagen}) => { 
    const navigate = useNavigate()
    return(
        <>
        <h2>{titulo}</h2>
        <img src={imagen} />
        <p>{descripcion}</p>
        <button onClick={() => navigate(`/comision68560/item/${id}`)}>ver detalle del producto</button>
        <p>stock disponible: {stock}</p>
        </>
    )
}

export default Item
