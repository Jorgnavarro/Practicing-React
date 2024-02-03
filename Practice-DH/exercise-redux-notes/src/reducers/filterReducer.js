import { createStore } from 'redux'

//Función reducer, contiene todas las acciones que se ejecutarán cuando una acción específica cambie. Casi siempre las acciones modifican los estados
const filterReducer = (state = "ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

//Función auxiliar, esta función contiene el tipo de acción que afectará al reducer y su estado en el store del reducer. Por lo general esta función suele ir en el controlador del elemento, que a su vez contiene un evento que la accionará, puede ser un click, submit, change, dependiendo de la necesidad
export const filterChange = (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};



export default filterReducer;
