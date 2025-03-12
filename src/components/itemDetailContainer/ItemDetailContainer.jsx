import ItemDetail from "../itemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const { id } = useParams()
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const Promesa = new Promise ((resolve, reject) => {
        const productoSeleccionado = fetch(`https://fakestoreapi.com/products/${id}`)
        setTimeout(() => {
            productoSeleccionado ? resolve(productoSeleccionado) : reject("Error en la conexión a las bases de datos")
        },1000);
    })

    useEffect(()=> {
        Promesa
            .then(res=> res.json())
            .then(json=> {
                console.log(json)
                setProductos(json)
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    },[])

    if( loading ) return <div>Cargando...</div>
    
    return(
        <>
        <ItemDetail titulo={productos.title} descripcion={productos.description} stock={productos.stock} imagen={productos.image} />
        </>
    )
}

export default ItemDetailContainer