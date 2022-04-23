import styles from './Header.module.css'
import Button from "../UI/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className={styles[`header`]}>
            <h1>ReactMeals</h1>
            <Button className={styles[`header__cart-button`]}>
                <FontAwesomeIcon icon={faCartShopping} />
                Your Cart
                <div className={styles[`header__number-of-items`]}>0</div>
            </Button>
        </header >
    );
}
export default Header;