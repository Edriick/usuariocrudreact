import './App.css';
import Usuario from './componentes/Usuario';
import UsuarioFormulario from './componentes/UsuarioFormulario';


function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <UsuarioFormulario/>
        <Usuario/>
      </div>      
    </div>
  );
}

export default App;
