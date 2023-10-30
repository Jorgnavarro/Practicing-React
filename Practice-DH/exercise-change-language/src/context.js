import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    spanish:{
        id: "ES",
        text: ES
    },
    portuguese: {
        id: "PTBR",
        text: PTBR
    }
    /*TIP: Añade los nuevos idiomas que quieras  */
};

/* SUGERENCIA: use createContext e inicie el idioma inglés como predeterminado (predeterminado) */
const LanguageContext = createContext(languages.english);

export default LanguageContext;