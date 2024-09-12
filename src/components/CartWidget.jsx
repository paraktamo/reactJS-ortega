import React from 'react';
import cartIcon from '../assets/carrito-de-compras.png';

const CartWidget = () => {
    
    const itemCount = 3;
  
    return (
      <div className="cart-widget d-flex align-items-center">
        <img src={cartIcon} alt="Cart" style={{ width: '24px', height: '24px' }} />
        {itemCount > 0 && (
          <span className="badge bg-primary ms-2">{itemCount}</span>
        )}
      </div>
    );
  };

export default CartWidget;
