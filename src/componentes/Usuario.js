import React,{useEffect, useState} from 'react'
import UsuarioFormulario from './UsuarioFormulario';
import {db} from '../firebase'

const Usuario = () => {

    const[usuarios, setUsuarios]= useState([])
    //Añadir Usuario
    const addUsuario = async (usuario) =>{
        await db.collection('TBL_USUARIO').doc().set(usuario)
        console.log('añadido');
    }

    //cargar datos tabla
    const getUsuarios = async ()=>{
        db.collection('TBL_USUARIO').onSnapshot((respuesta)=>{
            const usuarios = [];
            respuesta.forEach((r) =>{
                usuarios.push({...r.data(), id_usuario:r.id});
            });
            setUsuarios(usuarios);
        });
    }
    useEffect(()=>{
        getUsuarios()
    },[])


    return ( 
    
        <UsuarioFormulario addUsuario={addUsuario}
        />
        
    );
}
 
export default Usuario;