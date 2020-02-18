import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Inicio from './pagina/Inicio'
import MeuCanal from './pagina/MeuCanal'

function App() {
  return (
  	<Router>
	    <Route exact path="/" component={Inicio}/>
	  	<Route exact path="/meu-canal" component={MeuCanal}/>
    </Router>
  );
}

export default App;