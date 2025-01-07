import React, { useEffect } from 'react';
import { App } from '@capacitor/app';
import { useNavigate } from 'react-router-dom';

const AppListener: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        App.addListener('appUrlOpen', (event) => {
            const url = new URL(event.url);
            const token = url.searchParams.get('token');
            const email = url.searchParams.get('email');

            if (token && email) {
                // Navigasi ke halaman reset password
                navigate(`/reset-password?token=${token}&email=${email}`);
            }
        });
    }, []);

    return null;
};

export default AppListener;
