import React from 'react'
import ReactDOM from 'react-dom'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    
    //component, props, children
    const hello1 = React.createElement('h1', null, "this is widegets.jsx React.creatElement hello1" )
    console.log(hello1)
    const hello2 = <h1>this is widgets.jsx const hello2</h1>
    console.log(hello2)

    ReactDOM.render(hello2, root)
})