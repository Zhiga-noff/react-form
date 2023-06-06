import { useState } from 'react';
import style from './App.module.css';

const initialState = { email: '', login: '', password: '' };

const useStore = () => {
    const [state, setState] = useState(initialState);

    return {
        getState: () => state,
        updateState: (fieldName, newValue) => {
            setState({ ...state, [fieldName]: newValue });
        },
        resetState: ()=> {
            setState(initialState)
        }
    };
};

const sendData = (formData) => {
    console.log(formData);
};

export const Form = () => {
    const { getState, updateState, resetState } = useStore();

    const onSubmit = (event) => {
        event.preventDefault();
        sendData(getState());
    };

    const { email, login, password } = getState();

    const onChange =({target})=>updateState(target.name, target.value)

    return (
        <div className={style.app}>
            <form action="#" onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder={'Почта'}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="login"
                    value={login}
                    placeholder={'Логин'}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder={'Пароль'}
                    onChange={onChange}
                />
                <button type={'submit'}>Отправить</button>
                <button type={'button'} onClick={resetState}>Сбросить</button>
            </form>
        </div>
    );
};
