import React, {useState} from "react";
import AuthButton from "../AuthButton/AuthButton";
import { userAuth } from "../../api/api";

import "./AuthForm.css";

import showPasswordImg from '../img/show_icon.svg';
import hidePasswordImg from '../img/hide_icon.svg';

function AuthForm() {
    const [inputLoginValue, setInputLoginValue] = useState('');
    const [inputPasswordValue, setInputPasswordValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit behavior
    };
    
    return(
            <form className="form-auth" onSubmit={handleSubmit}>
                <div className="form-auth__title">
                    Аутентификация
                </div>
                <div className="form-auth__input-group">
                    <label className="label-group">
                        <div  className="label label--login">Электронная почта:</div>
                        <input 
                            className="input input--login"
                            type="email" 
                            value={inputLoginValue}
                            onChange={(e) => setInputLoginValue(e.target.value)}
                        />
                    </label>
                    
                    <label className="label-group">
                        <div  className="label label--password">Пароль:</div>
                        <input 
                            className="input input--password"
                            type = {showPassword ? "text" : "password"} 
                            value={inputPasswordValue}
                            onChange={(e) => setInputPasswordValue(e.target.value)}
                        />
                        <img  
                            title={showPassword ? "Скрыть пароль" : "Показать пароль"}
                            src={showPassword ? hidePasswordImg : showPasswordImg}
                            onClick={() => setShowPassword(prevState => !prevState)}
                        />
                    </label>
                </div>
                <AuthButton
                    onClick={ () => userAuth(inputLoginValue, inputPasswordValue) }
                >
                    Отправить
                </AuthButton>
            </form>
    );
}

export default AuthForm;