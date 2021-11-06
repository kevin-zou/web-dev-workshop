import styles from './Cart.module.scss'

export default function Cart({ items, setCartItems }) {
  const itemList = items.map((item, index) =>
    <div key={index}>{item.quantity}x {item.name} at ${(item.price * item.quantity).toFixed(2)}</div>
  )

  function calculateTotal() {
    var total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    })
    return total.toFixed(2);
  }
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <div className={styles.card}>
        {itemList}
        <b>Total: ${calculateTotal()}</b>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setCartItems([])}>Checkout</button>
        <button className={styles.button} onClick={() => setCartItems([])}>Clear cart</button>
      </div>
    </div>
  )
}
