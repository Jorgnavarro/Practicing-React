import { useContext } from "react"
import ThemeContext from "../context"


const Layout = ({children}) =>{

    const {theme} = useContext(ThemeContext);

        return(
            <div className="container_exercise" style={{background: theme.background, color: theme.font}}>
                {children}
            </div>
        )
}

export default Layout;