import React from 'react';
import { CartItemType } from '../App';
import {Wrapper} from './CartItem.styles';
import Button from '@material-ui/core/Button';

type Props = {
    cartItem:  CartItemType,
    addToCart: (clickedItem : CartItemType) => void,
    removeFromCart: (id:number) => void  
} 

const CartItem : React.FC<Props> = ({cartItem, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
        <div>
        <h3>{cartItem.title}</h3>
        <div className="information">
            <p>Price: ${cartItem.price}</p>
            <p>Total: ${(cartItem.price * cartItem.amount).toFixed(2)}</p>                
        </div>
        <div className="buttons">
            <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(cartItem.id)}
            >
                -
            </Button>
            <p>{cartItem.amount}</p>
            <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addToCart(cartItem)}
            >
                +
            </Button>
        </div>
        </div>
        <div>
            <img src={cartItem.image} alt={cartItem.title} />
        </div>
    </Wrapper>
  )
}

export default CartItem