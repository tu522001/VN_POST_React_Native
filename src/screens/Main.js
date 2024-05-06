import React from 'react';
import { SelectedProvider } from '../utils/SelectedContext';
import App from '../../App';

export default function Main() {
    return (
        <SelectedProvider>
            <App />
        </SelectedProvider>
    );
}
