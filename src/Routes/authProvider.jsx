import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { useDispatch } from "react-redux";
import { handleAuthAlertPush } from "../Page/Auth/store/authSlice";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const login = async (data) => {
        if(data.username && data.password){
            if(data.username === "admin" && data.password === "navitas"){
                data.admin = true
                setUser(data);
                navigate("/");
            }else if (data.username === "employee" && data.password === "navitas"){
                data.admin = false
                setUser(data);
                navigate("/");
            }else{
                dispatch(handleAuthAlertPush("Incorrect Username or Password"))
            }
        }
        
    };

    const logout = () => {
        setUser(null);
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        // eslint-disable-next-line
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};