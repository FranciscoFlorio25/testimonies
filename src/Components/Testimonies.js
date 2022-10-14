import React from "react";
import '../StyleSheet/Testimonies.css';

function Testimonie() {
  return(
    <div className='container-testimonie'>
      <img 
      className='image-testimonie'
      src={require('../Image/placeHolder.jpg')}
      alt = 'foto de dador de testimonio'
      />
      <div className='container-testimonie-text'>
        <p className='testimonie-name'>Juancito Rodigues en Argentina</p>
        <p className='role-testimonie'>Ingeniero de Software en TurtleSoft</p>
        <p className='testimonie-text'>Yo era un aventurero, viaje de aqui a aca,
         hasta que aprendi react, ahora, soy un desarrollador hecho y derecho</p>
      </div>
    </div>
  );
}

export default Testimonie;

