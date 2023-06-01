import React from 'react'
import Menu1 from './Menu1'
import Menu2 from './Menu2'

function Menu({ menu }) {
    return (
        <>
         <Menu1 menu={menu}/>
          <Menu2 menu={menu}/>
        </>
    )
}

export default Menu