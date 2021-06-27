import React from 'react'
import UsuarioFormulario from './UsuarioFormulario';


const Usuario = () => {

    //Añadir Usuario
    const addUsuario = (usuario) =>{
        console.log('add ',usuario);
    }
    return ( 
    
        <UsuarioFormulario addUsuario={addUsuario}
        />
        
    );
}
 
export default Usuario;