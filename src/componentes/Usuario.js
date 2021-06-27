import React,{useEffect, useState} from 'react'
import UsuarioFormulario from './UsuarioFormulario';
import {db} from '../firebase'

const Usuario = () => {

    const[usuarios, setUsuarios]= useState([])
    
    const[idActual,setIdActual] = useState('');

    //Añadir Usuario
    const addUsuario = async (usuario) =>{
        try{
            await db.collection('TBL_USUARIO').doc().set(usuario)
            alert('Se añadio correctamente el usuario');
        }catch(error){
            console.error(error);
        }
        
    }


    //Editar Usuario
    const editarUsuario = async (usuario) =>{
        try{
            await db.collection('TBL_USUARIO').doc(idActual).update(usuario)
            alert('Se edito correctamente el usuario');
            setIdActual('');
        }catch(error){
            console.error(error);
        }        
    }


    //Eliminar Usuario
    const eliminarUsuario = async (id) =>{
        if(window.confirm('seguro de quieres eliminar?')){
            try{
                await db.collection('TBL_USUARIO').doc(id).delete();
                alert('Se elimino correctamente el usuario');
            }catch(error){
                console.error(error);
            }  
        }
    }

    //cargar datos reporte
    const getUsuarios = async ()=>{
        try{
            db.collection('TBL_USUARIO').onSnapshot((respuesta)=>{
                const usuarios = [];
                respuesta.forEach((r) =>{
                    usuarios.push({...r.data(), id_usuario:r.id});
                });
                setUsuarios(usuarios);
            });
        }catch(error){
            console.error(error);
        }  
    }
    useEffect(()=>{
        getUsuarios()
    },[])


    return ( 
    <div className="col-md-8 p-2">
        <UsuarioFormulario {...{addUsuario,editarUsuario,idActual,usuarios}}
        />
        <div className="col-md-8 p-2">        
        <h1>Listado de Usuarios</h1>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cédula</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Mail</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
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
                                <td><i className="material-icons" onClick={() => setIdActual(user.id_usuario)}>create</i></td>
                                <td><i className="material-icons text-danger" onClick={() => eliminarUsuario(user.id_usuario)}>close</i></td>
                            </tr>
                })}      
            
            </tbody>
        </table>
        </div>
    </div>
    );
}
 
export default Usuario;