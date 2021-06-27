import React,{useState,useEffect} from 'react'
import { db } from '../firebase'

const UsuarioFormulario = (props) => {

    const usuarioInicial={
        nombre_usuario: '',
        cedula_usuario: '',
        telefono_usuario: '',
        mail_usuario:''
    }
    const [usuario,setUsuario] = useState(usuarioInicial)

    const accionBotonGuardar = e => {
        e.preventDefault();        
        console.log(validateCi(usuario.cedula_usuario));
        if(usuario.nombre_usuario.trim()==='')
            return alert('Ingrese un valor en Usuario')
        if(usuario.cedula_usuario.trim()==='')
            return alert('Ingrese un valor en cédula')
        if(!validateCi(usuario.cedula_usuario))
            return alert('El valor de la cédula es incorrecto')
        
        if(props.idActual === ''){
            props.addUsuario(usuario);
        }else{
            props.editarUsuario(usuario);
        }
        
        setUsuario({...usuarioInicial})
    }

    const manejaCambiosInputs = e =>{        
        const {name,value} = e.target;
        setUsuario({...usuario, [name]: value})
        
    }

    //editar
    const obtenerUsuarioId = async (id) =>{
        const user = await db.collection('TBL_USUARIO').doc(id).get();
        console.log(user.data());
        setUsuario({...user.data()})
    }

    useEffect(()=>{
        if(props.idActual === ''){
            setUsuario({...usuarioInicial});
        }else{
            obtenerUsuarioId(props.idActual);
        }
    },[props.idActual])

    //validaciones
    //CI extraido de https://gist.github.com/vickoman/7800717    
    const validateCi = cedula =>{
        if(cedula.length == 10){
            let digito_region = cedula.substring(0,2);
            if( digito_region >= 1 && digito_region <=24 ){
                let ultimo_digito   = cedula.substring(9,10);
                let pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
                let numero1 = cedula.substring(0,1);
                numero1 = (numero1 * 2);
                if( numero1 > 9 ){ numero1 = (numero1 - 9); }
                let numero3 = cedula.substring(2,3);
                numero3 = (numero3 * 2);
                if( numero3 > 9 ){  numero3 = (numero3 - 9); }
                let numero5 = cedula.substring(4,5);
                numero5 = (numero5 * 2);
                if( numero5 > 9 ){  numero5 = (numero5 - 9); }
                let numero7 = cedula.substring(6,7);
                numero7 = (numero7 * 2);
                if( numero7 > 9 ){  numero7 = (numero7 - 9); }
                let numero9 = cedula.substring(8,9);
                numero9 = (numero9 * 2);
                if( numero9 > 9 ){  numero9 = (numero9 - 9); }
                let impares = numero1 + numero3 + numero5 + numero7 + numero9;
                let suma_total = (pares + impares);
                let primer_digito_suma = String(suma_total).substring(0,1);
                let decena = (parseInt(primer_digito_suma) + 1)  * 10;
                let digito_validador = decena - suma_total;
                if(digito_validador == 10)
                digito_validador = 0;
                if(digito_validador == ultimo_digito){
                    return true;
                }else{
                    return false;
                }
          
            }else{
                return false;
            }
        }else{
            return false;
        }    
    }

    return ( 
        
        <form onSubmit={accionBotonGuardar} className="border-primary">
            <h1>Usuario</h1>
            <div className="form-group">
                <label>Usuario*</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Nombre del usuario" 
                        value={usuario.nombre_usuario}
                        name="nombre_usuario"          
                        onChange={manejaCambiosInputs}/>                
            </div>
            <div className="form-group">
                <label>Cédula*</label>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Cédula de identidad" 
                        value={usuario.cedula_usuario}
                        name="cedula_usuario"       
                        min="10"   
                        max="10"
                        onChange={manejaCambiosInputs}/>                 
            </div>
            <div className="form-group">
                <label>Teléfono</label>
                <input  type="text" 
                        className="form-control" 
                        min="7"
                        max="10"
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
                {props.idActual === ''?'Guardar Nuevo':'Editar'}
            </button>
            
        </form>
    
    
    );
}
 
export default UsuarioFormulario;