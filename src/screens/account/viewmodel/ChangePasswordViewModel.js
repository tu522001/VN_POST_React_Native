import { useState } from "react";

export default ChangePasswordViewModel = () => {


    const [password, setPassword] = useState('');

    const handleInputChangePassword = (text) => {
        setPassword(text);
    };


    const [newPassword1, setNewPassword1] = useState('');

    const handleInputChangeNewPassword1 = (text) => {
        setNewPassword1(text);
    };

    const [newPassword2, setNewPassword2] = useState('');

    const handleInputChangeNewPassword2 = (text) => {
        setNewPassword2(text);
    };

    return { password, handleInputChangePassword, newPassword1, handleInputChangeNewPassword1, newPassword2, handleInputChangeNewPassword2 };
}