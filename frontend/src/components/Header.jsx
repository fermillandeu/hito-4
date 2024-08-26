import React from 'react';
import headerImage from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <header 
      className="text-white text-center py-5" 
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px',
      }}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '50px 0' }}>
        <h1>¡Bienvenidos a Pizzería Mamma Mia!</h1>
        <p>Las mejores pizzas de la ciudad, hechas con cariño italiano</p>
      </div>
    </header>
  );
}

export default Header;
