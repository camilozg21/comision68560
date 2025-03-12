import Item from "../item/Item"

const ItemList = ( {productos} ) => {

return(
    <>
    {productos.map((producto)=>{
        return(
            <div key={producto.id}>
            <Item titulo={producto.title} id={producto.id} descripcion={producto.description} stock={producto.stock} imagen={producto.image} />    
            </div>  
        )
    })}
    </>
)

}

export default ItemList