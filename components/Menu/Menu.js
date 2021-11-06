import { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import firestore from '../../util/firebase'

export default function Menu ({ addItem }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch and sort menu items alphabetically
    async function fetchData() {
      const fetchedMenuItems = await firestore.getMenuItems();
      fetchedMenuItems.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setMenuItems(fetchedMenuItems);
    }
    
    fetchData();
  }, [])

  const items = menuItems.map((item) =>
    <MenuItem
      key={item.name}
      name={item.name}
      description={item.description}
      picture={item.imgSrc}
      price={item.price}
      addItem={addItem}
    />
  );

  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
      {items}
    </div>
  )
}
