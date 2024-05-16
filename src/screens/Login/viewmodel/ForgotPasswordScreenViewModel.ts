import { useState } from "react";

interface forgotPasswordData {
    username: string;
    password: string;
}

interface ForgotPasswordScreenViewModel {
    forgotPasswordData: forgotPasswordData
    handleInputChangeUsername: (text: string) => void;
    handleInputChangePassword: (text: string) => void;
}

const useForgotPasswordScreenViewModel = (): ForgotPasswordScreenViewModel => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleInputChangeUsername(text: string) {
        setUsername(text);
    };

    function handleInputChangePassword(text: string) {
        setPassword(text);
    };

    const forgotPasswordData: forgotPasswordData = { username, password };

    return {
        forgotPasswordData,
        handleInputChangeUsername,
        handleInputChangePassword
    };
}
export default useForgotPasswordScreenViewModel;