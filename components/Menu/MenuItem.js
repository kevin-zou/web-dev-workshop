import { useState } from 'react'
import styles from './MenuItem.module.scss'

export default function MenuItem({ name, description, picture, price }) {
  const [value, setValue] = useState(1);

  return (
    <div className={styles.card}>
      <img src={picture} />
      <div className={styles.description}>
        <div>
          <h2>{name}</h2>
          <p>${price}</p>
          <p>{description}</p>
        </div>
        <div className={styles.checkout}>
          <input type="number" name="quantity" min="1" max="9" value={value} onChange={(e) => { setValue(e.target.value) }} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
