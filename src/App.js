
import { useCallback, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Videos from './Components/Main/Videos';

function App() {
  const [menu,setMenu]=useState(true)
  
  const onChangeMenu= useCallback(() => {
    setMenu(menu === true ? false : true)
  },[menu])

  return (
    <>
      <Header menu={menu} onChangeMenu={onChangeMenu}/>
      <div className="container-fluid ">
        <div className="row">
        <Menu menu={menu} setMenu={setMenu}/>
        <Videos/>
        </div>
      </div>
    </>
  );
}

export default App;
