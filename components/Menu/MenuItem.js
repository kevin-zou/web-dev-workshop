import { useState } from 'react'
import styles from './MenuItem.module.scss'

export default function MenuItem({ name, description, picture, price, addItem }) {
  const [value, setValue] = useState(1);

  function handleClick() {
    addItem({
      name,
      quantity: value,
      price: price,
    })
  }

  return (
    <div className={styles.card}>
      <img src={picture} />
      <div className={styles.description}>
        <div>
          <h2>{name}</h2>
          <p>${price.toFixed(2)}</p>
          <p>{description}</p>
        </div>
        <div className={styles.checkout}>
          <input type="number" name="quantity" min="1" max="9" value={value} onChange={(e) => { setValue(e.target.value) }} />
          <button className={styles.button} onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
