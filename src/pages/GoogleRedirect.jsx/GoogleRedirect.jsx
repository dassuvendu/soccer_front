import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { editProfile } from '../../reducers/profileSlice';
import { googleSignIn } from '../../reducers/authSlice';
import { Spinner } from 'flowbite-react';
import { v4 as uuidv4 } from "uuid";

const GoogleRedirect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { subscription } = useSelector((state) => state.auth);

    useEffect(() => {
        // Retrieve the access token from wherever you have stored it
        const uid = uuidv4();
        localStorage.setItem('ref_id', uid)
        const token = localStorage.getItem('googleAccessToken');
        dispatch(googleSignIn({token:token,uuid:uid})).then(() => {
            const userToken = localStorage.getItem('userToken');
            
            // setIsSubscribe(subscription);
            // console.log('isSubscribe in google redirect', isSubscribe);
            if (userToken !== null) {
                    dispatch(editProfile());
                    console.log('inside side effect');
                    navigate('/dashboard');
                
            } else {
                localStorage.removeItem('googleAccessToken');
                localStorage.removeItem('ref_id');
                navigate('/');
                // dispatch(isGoogleLoggedIn(false));
            }
        });
    }, [dispatch, googleSignIn]);

    return (
        <div className='h-96 flex justify-center items-center'>
            <Spinner />
        </div>
    );
};

export default GoogleRedirect;