import React from 'react'

const UsuarioFormulario = () => {

    const accionBotonGuardar = e => {
        console.log(e);
    }


    return ( 
        
        <form onSubmit={accionBotonGuardar}>
            <div class="form-group">
                <label>Usuario</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Nombre del usuario" 
                        value=""
                        name="usuario"          
                        />                
            </div>
            <div class="form-group">
                <label>Cédula</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Cédula de identidad" 
                        value=""
                        name="cedula"          
                        />                
            </div>
            <div class="form-group">
                <label>Teléfono</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Número de celular" 
                        value=""
                        name="telefono"          
                        />                
            </div>
            <div class="form-group">
                <label>Email</label>
                <input  type="email" 
                        className="form-control" 
                        placeholder="Correo electronico" 
                        value=""
                        name="mail"          
                        />                
            </div>
            
            <button type="button" className="btn btn-success btn-block">
                Guardar
            </button>
            
        </form>
    
    
    );
}
 
export default UsuarioFormulario;