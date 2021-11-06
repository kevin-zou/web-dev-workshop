import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

export default function Menu () {
  return (
    <div className={styles.menu}>
      <MenuItem
        name="Coffee"
        description="Just some coffee."
        picture="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
        price="2.50"
      />
      <MenuItem
        name="Tea"
        description="Just some tea."
        picture="https://static.onecms.io/wp-content/uploads/sites/9/2021/06/22/different-types-of-tea-FT-BLOG0621.jpg"
        price="2.50"
      />
      <MenuItem
        name="Choccy Cookies"
        description="Decadent. Delicious. Yours."
        picture="https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1-550x550.jpg"
        price="1.50"
      />
      <MenuItem
        name="Choccy Croissants"
        description="The classic buttery, flaky, viennoiserie pastry you know and love, chocolate edition."
        picture="https://images.squarespace-cdn.com/content/v1/5287fa22e4b0f296720af5f7/1440878884280-TAQ8HDMWJ0TRFRS7CV8L/image-asset.jpeg"
        price="5.00"
      />
      <MenuItem
        name="Hamburger"
        description="As seen in the commercial!"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg"
        price="8.00"
      />
    </div>
  )
}
