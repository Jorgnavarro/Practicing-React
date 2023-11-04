import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
  <img src="../../public/images/doctor.jpg" className="card-img-top" alt="dentist image"/>
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h5 className="card-text text-center">{username}</h5>
  </div>
        <button type="button" className="btn btn-primary">
          Add fav
      </button>
  </div>
  );
};

export default Card;
