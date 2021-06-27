import React,{useState} from 'react'

const UsuarioFormulario = (props) => {

    const usuarioInicial={
        id_usuario: '',
        nombre_usuario: '',
        cedula_usuario: '',
        telefono_usuario: '',
        mail_usuario:''
    }
    const [usuario,setUsuario] = useState(usuarioInicial)

    const accionBotonGuardar = e => {
        e.preventDefault();
        console.log(e.target.value);
        props.addUsuario(usuario);
    }

    const manejaCambiosInputs = e =>{        
        const {name,value} = e.target;
        console.log(name,value);
        setUsuario({...usuario, [name]: value})
        
    }


    return ( 
        
        <form onSubmit={accionBotonGuardar}>
            <div className="form-group">
                <label>Usuario</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Nombre del usuario" 
                        value={usuario.nombre_usuario}
                        name="nombre_usuario"          
                        onChange={manejaCambiosInputs}/>                
            </div>
            <div className="form-group">
                <label>Cédula</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Cédula de identidad" 
                        value={usuario.cedula_usuario}
                        name="cedula_usuario"          
                        onChange={manejaCambiosInputs}/>                 
            </div>
            <div className="form-group">
                <label>Teléfono</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Número de celular" 
                        value={usuario.telefono_usuario}
                        name="telefono_usuario"          
                        onChange={manejaCambiosInputs}/>                  
            </div>
            <div className="form-group">
                <label>Email</label>
                <input  type="email" 
                        className="form-control" 
                        placeholder="Correo electronico" 
                        value={usuario.mail_usuario}
                        name="mail_usuario"          
                        onChange={manejaCambiosInputs}/>                 
            </div>
            
            <button className="btn btn-primary btn-block">
                Guardar
            </button>
            
        </form>
    
    
    );
}
 
export default UsuarioFormulario;