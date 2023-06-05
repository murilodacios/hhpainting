import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

type User = {
    email: string;
    iframe: string;
    name: string;
    id: string;
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): Promise<void>;
    isAuthenticated: boolean;
    user: User | undefined;
    loadingLogin: boolean;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>()

    const [loadingLogin, setLoadingLogin] = useState(false)

    const isAuthenticated = !!user

    useEffect(() => {

        const { 'strongr:token': token, 'strongr:user': userEmail } = parseCookies()

        if (token) {

            try {
                //@ts-ignore
                api.defaults.headers.Authorization = `Bearer ${token}`;
                api.get(`/users/${userEmail}`).then(response => {

                    const { email, name, iframe, id } = response.data

                    setUser({ email, name, iframe, id })
                    setLoadingLogin(false)
                })

            } catch (err) {
                console.log(err)
            }
        }

    }, [])

    async function signOut(): Promise<void> {
        destroyCookie(undefined, "strongr:token");
        destroyCookie(undefined, "strongr:user");
        Router.push('/')
    }

    async function signIn({ email, password }: SignInCredentials) {

        setLoadingLogin(true)

        try {

            const session = await api.post('/sessions', {
                email,
                password
            })

            const { token, user } = session.data

            setCookie(undefined, 'strongr:token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setCookie(undefined, 'strongr:user', email, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            //@ts-ignore
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser(user)

            window.location.href = `${window.location.href}/painel`

            // Router.push("/painel")

        } catch (err) {

            toast.error('E-mail ou senha incorretos', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setLoadingLogin(false)

        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut, loadingLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthenticate = () => {
    const context = useContext(AuthContext);
    return context;
}