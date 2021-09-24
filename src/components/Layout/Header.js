import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import drinksImage from '../../assets/drinks.jpg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Demo-Group2</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={drinksImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;