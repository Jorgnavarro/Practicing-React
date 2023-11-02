import { useState, useEffect } from "react";

// AQUI CREAMOS NUESTRO CUSTOM HOOK PARA REALIZAR UN FETCH.
const useFetch = (url) => {
    // Guardamos un estado para indicar que el hook se encuentra
    // obteniendo la data.
    const [isLoading, setIsLoading] = useState(false);

    // Aqui guardamos la respuesta de la API.
    const [apiData, setApiData] = useState([]);

    // Almacenamos un estado para mostrar un mensaje de error, en caso de
    // que algo falle.
    const [errorMessage, setErrorMessage] = useState("");

    console.log(apiData);

    // Utilizamos un useEffect para realizar el pedido a la API cada
    // vez que cambien la URL.
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Response not succesful");
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                setErrorMessage(error.message);
                setApiData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    // Retornamos la información que se va a utilizar en el componente
    return { isLoading, apiData, errorMessage };
};

export default useFetch;
