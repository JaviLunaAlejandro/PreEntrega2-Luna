import { Button} from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
    return (

        <div className="cart">

            <Button size='md' height='50px' width='200px' border='2px' bg='#f9bc60'>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <span>10</span>
            </Button>
        </div>
    )
}

export default CartWidget