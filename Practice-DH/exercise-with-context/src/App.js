
import { useMemo, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import ThemeContext, {themes} from './context';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme =()=>{
    if(theme === themes.dark){
      setTheme(themes.light)
    }else{
      setTheme(themes.dark)
    }
  }
  const providerValue = useMemo(()=>({
    theme, handleChangeTheme
  }), [theme, handleChangeTheme])
  return (
    <ThemeContext.Provider value={providerValue}>
      <Layout>
        <Navbar/>
        <Body/>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
