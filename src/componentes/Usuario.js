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
    <>
        <UsuarioFormulario addUsuario={addUsuario}
        />
        <div>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cédula</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Mail</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                
                 {usuarios.map(user =>{
                    return  <tr key={user.id_usuario}>
                                <th scope="row">{user.id_usuario}</th>
                                <td>{user.nombre_usuario}</td>
                                <td>{user.cedula_usuario}</td>
                                <td>{user.telefono_usuario}</td>
                                <td>{user.mail_usuario}</td>
                                <td></td>
                                <td><i className="material-icons text-danger">close</i></td>
                            </tr>
                })}      
            
            </tbody>
        </table>
    </div>
    </>
    );
}
 
export default Usuario;