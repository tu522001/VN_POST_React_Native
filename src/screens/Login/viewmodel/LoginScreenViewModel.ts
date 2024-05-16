import { useState } from "react";

interface LoginData {
    username: string;
    password: string;
}

interface LoginScreenViewModel {
    loginData: LoginData
    handleInputChangeUsername: (text: string) => void;
    handleInputChangePassword: (text: string) => void;
}

const useLoginScreenViewModel = (): LoginScreenViewModel => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleInputChangeUsername(text: string) {
        setUsername(text);
    };

    function handleInputChangePassword(text: string) {
        setPassword(text);
    };

    const loginData: LoginData = { username, password };

    return {
        loginData,
        handleInputChangeUsername,
        handleInputChangePassword
    };
}
export default useLoginScreenViewModel;