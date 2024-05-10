import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { editProfile } from '../../reducers/profileSlice';
import { googleSignIn } from '../../reducers/authSlice';
import { Spinner } from 'flowbite-react';

const GoogleRedirect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isSubscribed = JSON.parse(
        localStorage.getItem('isSubscribed')
    )?.isSubscribed;
    const { isloggedIn, subscription } = useSelector((state) => state.auth);

    // const [isSubscribe, setIsSubscribe] = useState(false);

    useEffect(() => {
        // Retrieve the access token from wherever you have stored it
        const token = localStorage.getItem('googleAccessToken');
        dispatch(googleSignIn(token)).then(() => {
            const userToken = localStorage.getItem('userToken');
            dispatch(editProfile());
            // setIsSubscribe(subscription);
            // console.log('isSubscribe in google redirect', isSubscribe);
            if (userToken !== null) {
               
                // if (isSubscribe !== null) {
               
                    console.log('inside side effect');
                    dispatch(editProfile());
                    navigate('/dashboard');
                
            } else {
                localStorage.removeItem('googleAccessToken');
                navigate('/');
                // dispatch(isGoogleLoggedIn(false));
            }
        });
    }, [dispatch, googleSignIn, subscription]);

    return (
        <div className='h-96 flex justify-center items-center'>
            <Spinner />
        </div>
    );
};

export default GoogleRedirect;