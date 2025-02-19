import { createContext, useState } from 'react';
import apiLocal from '../Api/apiLocal';


export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false);
    const [token, setToken] = useState("");

    const authenticated = !!tokenT

    async function verificaToken() {
        const iToken = localStorage.getItem('@token');
        if (!iToken) {
            setTokenT(false);
            return
        }
        const tokenU = JSON.parse(iToken);
        setToken(tokenU);

        try {
            const resposta = await apiLocal.get('/verificaToken', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (resposta.data.id) {
                setTokenT(true);
                localStorage.setItem('@id', JSON.stringify(resposta.data.id));
                localStorage.setItem('@nome', JSON.stringify(resposta.data.nome));
            }
        } catch (error) {

        }
    }

    async function login(email, password) {
        try {
            const resposta = await apiLocal.post('/Login', {
                email,
                password
            });


            localStorage.setItem('token', JSON.stringify(resposta.data.token));
            localStorage.setItem('@id', JSON.stringify(resposta.data.id));
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome));
            setTokenT(true)

        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider value={{ authenticated, login, verificaToken, token }}>
            {children}
        </AuthContext.Provider>
    )
}
