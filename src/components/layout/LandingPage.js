import React from 'react'
import styles from './LandingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
const LandingPage = (props) => {
    const clickHandler = () => {
        let offset = document.getElementById("meals-area").offsetTop;
        window.scrollTo(0, offset);
        props.onClickToGoDown();
    }
    return (
        <div className={styles[`landing`]}>
            <div className={styles[`landing__description`]}>
                <h2>
                    Delicious Food, Delivered To You
                </h2>
                <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                    <br /><br />
                    All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
            <button className={styles[`landing__order`]} onClick={clickHandler}><FontAwesomeIcon icon={faAnglesDown} /></button>
        </div >
    );
}
export default LandingPage;