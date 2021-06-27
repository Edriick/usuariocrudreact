import React from 'react'
import UsuarioFormulario from './UsuarioFormulario';
import {db} from '../firebase'

const Usuario = () => {

    //Añadir Usuario
    const addUsuario = async (usuario) =>{
        await db.collection('TBL_USUARIO').doc().set(usuario)
        console.log('añadido');
    }

    
    return ( 
    
        <UsuarioFormulario addUsuario={addUsuario}
        />
        
    );
}
 
export default Usuario;