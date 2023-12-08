import { useReducer } from "react";
import { createContext} from "react";

export const UserContext = createContext();

//Creamos un reducer para manipular la información y almacenarla en un estado

export const gitHubUserReducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "CHANGE_USER" : {
            //validamos si el usuario es el mismo que tenemos almacenado
            const existingUser = state.userName === action.payload.login;
            //Si es un usuario distinto, extraemos las propiedades
            //Que deseamos almacenar y las guardamos en el estado
            if(!existingUser){
                const {name, avatar_url, html_url, login} = action.payload;
                //nuestro estado es un objeto con estas propiedades
                const newUser = {name, avatar_url, html_url, userName: login};
                //En caso de que cambie el usuario seleccionado actualizamos la información que se encuentre en el Storage
                setUserInStorage(newUser);
                return newUser;
            }
            return state;
        }
        default: 
            return state;
    }
}

const getUserFromStorage = ()=>{
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : [];
};
    
const setUserInStorage = (user) =>{
    localStorage.setItem("user", JSON.stringify(user));
}

const UserContextProvider = ({children}) =>{
    // const [user, setUser] = useState(getUserFromStorage());
    const [user, dispatch] = useReducer(
        gitHubUserReducer, //pasamos nuestro reducer
        {}, //pasamos un objeto vacío, ya que lo inicializamos en forma diferida
        getUserFromStorage, // pasamos la función para inicializar el estado en forma diferida
    );
    
    // useEffect(()=>{
    //     setUserInStorage(user)
    // }, [user]);

    const changeUser = (user) => dispatch({type: "CHANGE_USER", payload: user});

    return(
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;