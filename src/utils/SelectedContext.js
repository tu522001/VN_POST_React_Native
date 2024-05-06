import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [username, setUsername] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedIsSelected = await AsyncStorage.getItem('isSelected');
                const storedIsUserName = await AsyncStorage.getItem('username');
                const storedIsAddress = await AsyncStorage.getItem('address');
                const storedIsPhone = await AsyncStorage.getItem('phone');
                const storedIsEmail = await AsyncStorage.getItem('email');
                if (storedIsSelected !== null || storedIsUserName !== null || storedIsAddress !== null || storedIsPhone !== null || storedIsEmail !== null) {
                    setIsSelected(JSON.parse(storedIsSelected));
                    setUsername(storedIsUserName);
                    setAdress(storedIsAddress);
                    setPhone(storedIsPhone);
                    setEmail(storedIsEmail);
                }
            } catch (error) {
                3
                console.error('Error fetching isSelected from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <SelectedContext.Provider value={{ isSelected, setIsSelected, username, setUsername, address, setAdress, phone, setPhone, email, setEmail }}>
            {children}
        </SelectedContext.Provider>
    );
};

export const useSelected = () => {
    return useContext(SelectedContext);
};
