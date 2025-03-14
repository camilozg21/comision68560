import ItemList from '../itemList/ItemList'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

const ItemListContainer = () =>{
    const { categoryId } = useParams()
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const Promesa = new Promise ((resolve, reject) => {
        const misProductos = fetch('https://fakestoreapi.com/products')
        setTimeout(() => {
            misProductos ? resolve(misProductos) : reject("Error en la conexión a las bases de datos")
        }, 2000);
    })

    useEffect(()=> {
        Promesa
            .then(res=> res.json())
            .then(json=> {
                setProductos(json)
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    },[])

    if( loading ) return <div>Cargando...</div>

    let a
    
    if(categoryId){
        a = productos?.filter((prod) => prod.category === categoryId).map((producto) => producto)
    }else{
        a = productos
    }

    return(
        <>
        <ItemList productos={a} />
        </>
    )
}

export default ItemListContainer