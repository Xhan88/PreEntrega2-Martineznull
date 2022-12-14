import React from "react"
import ItemCount from "./ItemCount"
import '../components/ItemDetail.css'


const ItemDetail = ({product}) => {
  const onAdd = (cant) => {
      console.log('la cantidad seleccionada es: ',cant)
  }
  return (
      <div className="container border  border-primary rounded">
          <div className="row">
              <div className="col">
                  <img className="w-50" src={product.foto} alt='foto producto' />
                  <h3>nombre: {product.name}</h3>
                  <h3>categoria: {product.categoria}</h3>
                  <h4>precio:<spam className='precio'>{product.precio}</spam> </h4>
              </div>
              <div className="col">
                  <ItemCount 
                      stock={11} 
                      initial={1} 
                      onAdd={onAdd} 
                  />
                  
              </div>
          </div>
          
      </div>
)
}

export default ItemDetail
