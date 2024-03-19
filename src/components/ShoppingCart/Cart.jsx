import PropTypes from 'prop-types'

const Cart = ({cart}) =>{
return(
        <div className="md:w-[35%] rounded-2xl border-2">
            <div className="text-center my-2 border-b-2 pb-3">
                <h1 className="text-xl font-bold">Want To Cook : {cart.length}</h1>
            </div>
            <div>
                {
                    cart.map( (carts, idx ) => <div key={idx} className='flex items-center gap-2'>
                    <p>{carts.recipe_name}</p>
                    <p>{carts.preparing_time}</p>
                    <p>{carts.calories}</p>
                    <button className='prepaing'>Preparing</button>
                    </div> )
                 }
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array
}

export default Cart