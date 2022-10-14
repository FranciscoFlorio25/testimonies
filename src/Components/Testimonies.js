import React from "react";
import '../StyleSheet/Testimonies.css';

function Testimonie(props) {
  return(
    <div className='container-testimonie'>
      <img 
      className='image-testimonie'
      src={require(`../Image/${props.image}`)}
      alt = 'foto de dador de testimonio'
      />
      <div className='container-testimonie-text'>
        <p className='testimonie-name'>{props.name} en {props.country}</p>
        <p className='role-testimonie'>{props.role} en {props.corporation}</p>
        <p className='testimonie-text'>"{props.testimonie}"</p>
      </div>
    </div>
  );
}

export default Testimonie;

