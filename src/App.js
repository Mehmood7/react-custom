import React from 'react';
import './App.css';
import './stile.css'
const App = ({friends})=> (
    <div>
      <h1 className="green"> Hello from <strong>Mehmood</strong></h1>
      <hr/>
      <h4>I have {friends-4} firends</h4>
      <h3>My Friends</h3>
      <ol>
        <li>Umar</li>
        <li>Nouman</li>
        <li>Ali</li>
      </ol>
    </div>
)

export default App;
