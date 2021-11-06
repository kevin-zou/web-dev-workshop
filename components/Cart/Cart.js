import { useState } from 'react';
import styles from './Cart.module.scss'
import firestore from '../../util/firebase'

export default function Cart({ items, setCartItems }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [warning, setWarning] = useState('');

  const itemList = items.map((item, index) =>
    <div key={index}>{item.quantity}x {item.name} at ${(item.price * item.quantity).toFixed(2)}</div>
  )

  function calculateTotal() {
    var total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    })
    return total;
  }

  function checkout() {
    if (items.length === 0) {
      setWarning('Please add at least one item.');
    } else if (!email) {
      setWarning('Please enter your email.');
    } else {
      firestore.placeOrder({
        email: email,
        items,
        total: calculateTotal(),
      });
  
      setWarning('');
      setMessage('Thank you for your order!');
    }
  }

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <div className={styles.card}>
        {itemList}
        <b>Total: ${calculateTotal().toFixed(2)}</b>
      </div>
      {warning && <div>{warning}</div>}
      {message ?
        <div className={styles.inputs}>{message}</div>
      :
        <div className={styles.inputs}>
          Email: <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <button className={styles.button} onClick={checkout}>Checkout</button>
          <button className={styles.button} onClick={() => setCartItems([])}>Clear cart</button>
        </div>
      }
    </div>
  )
}
