export function Order ({order, handleClick}){


        return(
            <>
        <h2>Su pedido: </h2>
        <div>
        {order?<h3>{order}</h3>:undefined}
        </div>
          <button onClick={handleClick}>Cancelar pedido</button>
        </>


        )
}