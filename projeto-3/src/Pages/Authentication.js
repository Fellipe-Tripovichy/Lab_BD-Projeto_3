import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import instance from '../Services/api';

import Header from '../Components/Header.js';
import Button from '../Components/Button.js';
import '../Components/InputText.css';

const Authentication = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    useEffect(() => {
        userPermission();
    }, []);

    const [userPermissionData, setUserPermissionData] = useState('');

    const userPermission = async () => {
        try {
          const response = await instance.get('/user',{
            params: {
                login: login,
            }
          });
          console.log(response);
          setUserPermissionData(response.data.tipo);
        } catch (error) {
          console.log('Error:', error);
        }
    };

    const onSubmitLogin = async (e) => {
      try {
          const response = await instance.post('/login', {
            login: login,
            password: password,
          });
          console.log(response);
          localStorage.setItem('token', response.data);
          if(userPermissionData === 'Administrador') {
            localStorage.setItem('nomeAdmin', password);
            navigate('/HomeAdmin');
        } else if(userPermissionData === 'Escuderia'){
            localStorage.setItem('nomeEscuderia', password);
            localStorage.setItem('idEscuderia', password);
            navigate('/HomeConstructor');
        } else if(userPermissionData === 'Piloto'){
            localStorage.setItem('nomePiloto', password);
            localStorage.setItem('idPiloto', password);
            navigate('/HomeDriver');
        }
          
        } catch (error) {
          console.log('error', error);
          throw error;
        }
    };

    const handleAllSubmit = () => {
        userPermission();
        onSubmitLogin();
    }

        return(
            <div className="AllContainer">
                <Header />
                <div style={{paddingTop: "96px", height: "100%"}}>
                    <div className="form-content">
                        <h2 className="h2" style={{width: "300px"}}>Acessar</h2>
                        <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
                            <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                                <h3 className="h3" style={{margin: "0"}}>Usuário</h3>
                                <input className="InputText" type="login" id="loginName" name="login" onChange={handleLoginChange}/>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
                            <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                                <h3 className="h3" style={{margin: "0"}}>Senha</h3>
                                <input className="InputText" type="password" id="loginPassword" name="password" onChange={handlePasswordChange}/>
                            </div>
                        </div>
                        <Button onClick={handleAllSubmit} variable="modal" text="Acessar"/>
                    </div>
                </div>
            </div>
        ); 
}

export default Authentication;