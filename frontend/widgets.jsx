import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs'


function Root (){
    return(
        <div>
            <Clock />
            <br />
            <Tabs />
        </div> 
    )
}



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    
    //component, props, children
    // const hello1 = React.createElement('h1', null, "this is widegets.jsx React.creatElement hello1" )
    // console.log(hello1)

    // const hello2 = <h1>this is widgets.jsx const hello2</h1>
    // console.log(hello2)

    ReactDOM.render(<Root/>, root)
})