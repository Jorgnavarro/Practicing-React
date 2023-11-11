import { useState } from "react";

/*
Aquí vamos a crear nuestro custom hook, el cual
se encargará de paginar nustro array de personajes.
Dicho custom hook, recibirá como argumentos el
array de personajes, y la cantidad de items que
deberá mostrar en cada página.
De esta manera, tendremos un hook que podrá ser
reutilizado en diversos casos, cambiando cada uno 
de estos argmentos.
 */
const usePagination = (data, itemsPerPage) => {
    // En primer lugar, vamos a guardar la página actual
    // en un estado, de manera tal de poder actualizarla
    // a medida que la persona navegue entre ellas
    // Iniciaremos con la página 1 por defecto.
    const [currentPage, setCurrentPage] = useState(1);

    // También, debemos almacenar el número total de
    // items. Esto no es otra cosa que el largo de nuestro
    // array.
    const totalItems = data.length;

    // A continuación, calculamos cual es el número de páginas,
    // dividiendo el total de items (largo de nuestro array),
    // por la cantidad de items que mostraremos en cada
    // página. Debemos redondear el número hacia arriba,
    // ya que la cantidad de páginas tiene que ser un valor
    // entero.
    const maxPage = Math.ceil(totalItems / itemsPerPage);

    // Ahora, debemos calcular la cantidad de items que mostraremos
    // en cada página (los que realmente se muestran), más alla de lo que
    // pasamos como argumento.
    // Para ello, debemos tomar el menos valor entre:
    //  a) El producto entre la página actual y el valor de
    // items por página que pasamos como argumento, o
    //  b) el largo del array.
    // Esto nos permitirá informar cuantos items se están
    // mostrando actualmente en la página.
    const itemsInPage = Math.min(itemsPerPage * currentPage, totalItems);

    // Ahora que ya tenemos los datos necesarios, nos ocuparemos
    // de generar la información de la página actual.
    // Para ello, crearemos una función que calculará:
    //  a) El comienzo de la página: es igual al producto de
    // la página actual -1, y la cantidad de items por página;
    // b) El final de la página, que no es otra cosa que la suma
    // enre el valor del punto a) y la cantidad de items que agregaremos
    // en esta página.
    // Una vez que tenemos esos valores, lo que debemos hacer
    // es tomar nuestro array de personajes, y "cortarlo"
    // partiendo del valor de inicio y hasta el valor del final de la página.

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };

    // También, debemos crear una función que nos permita
    // navegar a la página siguiente, inrementando en 1
    // dicho valor. En este caso, tendremos que validar que
    // ese valor no exceda el número máximo de páginas
    // que calculamos anteriormente.
    const nextPage = () =>
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));

    // Por otro lado, haremos lo mismo para navegar hacia la página
    // anterior. Pero, en este caso, deberemos validar que el resultado
    // no sea menor a 1.
    const prevPage = () =>
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

    // Finalmente, debemos retornar los valores y
    // funciones que utilizaremos en nuestro componente
    return {
        currentPage, //La página actual
        maxPage, // el número máximo de páginas
        itemsPerPage, // la cantidad de items por página
        totalItems, // el número total de items
        itemsInPage, // el número de items en la página actual
        nextPage, // la función para navegar a la página siguiente
        prevPage, // la función para navegar a la página anterior
        currentData: currentData() // la data de la página actual
    };
};

export default usePagination;
