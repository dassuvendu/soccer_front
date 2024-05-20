import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { editProfile } from '../../reducers/profileSlice';
import { googleSignIn } from '../../reducers/authSlice';
import { Spinner } from 'flowbite-react';
import { v4 as uuidv4 } from "uuid";
import { getUid } from '../../reducers/uuidSlice';

const GoogleRedirect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { subscription } = useSelector((state) => state.auth);
    const [tsr, setTsr] = useState("")
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // Retrieve the access token from wherever you have stored it
    //     const uid = uuidv4();
    //     setTsr(uid)
    //     console.log("tsr", tsr);

    //     const ggltoken = localStorage.getItem('googleAccessToken');
    //     console.log("ggltoken:", ggltoken);

    //     dispatch(googleSignIn({ token: ggltoken, uuid: uid })).then(() => {
    //         const userToken = JSON.parse(localStorage.getItem('userToken'));
    //         console.log("userToken ggl", userToken);
    //         const UserToken = userToken?.token
    //         console.log("UserToken ggl", UserToken);

    //         localStorage.setItem(
    //             'userToken',
    //             JSON.stringify({ token: UserToken })
    //         );

    //         // setIsSubscribe(subscription);
    //         // console.log('isSubscribe in google redirect', isSubscribe);
    //         if (UserToken !== null) {

    //             dispatch(editProfile());
    //             console.log('inside side effect');

    //             navigate('/dashboard');

    //         } else {
    //             // localStorage.removeItem('googleAccessToken');
    //             // localStorage.removeItem('ref_id');
    //             navigate('/');
    //             // dispatch(isGoogleLoggedIn(false));
    //         }
    //     });
    // }, [dispatch, googleSignIn]);


    // let uid = localStorage.getItem("uuid");
    // if (!uid) {
    //     uid = uuidv4();
    //     localStorage.setItem("uuid", uid);
    // }


    // useEffect(() => {
    //     const ggltoken = localStorage.getItem('googleAccessToken');
    //     const uid = localStorage.getItem('uuid');

    //     console.log("ggltoken:", ggltoken);
    //     console.log("uid:", uid);

    //     if (ggltoken && uid) {
    //         dispatch(googleSignIn({ token: ggltoken, uuid: uid })).then(() => {
    //             const userToken = JSON.parse(localStorage.getItem('userToken'));
    //             console.log("userToken ggl", userToken);
    //             const UserToken = userToken?.token;
    //             console.log("UserToken ggl", UserToken);

    //             if (UserToken) {
    //                 localStorage.setItem('userToken', JSON.stringify({ token: UserToken }));
    //                 dispatch(editProfile());
    //                 console.log('inside side effect');
    //                 navigate('/dashboard');
    //             } else {
    //                 navigate('/');
    //             }
    //         });
    //     } else {
    //         navigate('/');
    //     }
    // }, [dispatch, navigate]);

    useEffect(() => {
        let uid = localStorage.getItem("uuid");
        if (!uid) {
            uid = uuidv4();
            localStorage.setItem("uuid", uid);
        }

        const ggltoken = localStorage.getItem('googleAccessToken');
        console.log("ggltoken:", ggltoken);
        console.log("uid:", uid);

        if (ggltoken && uid) {
            dispatch(googleSignIn({ token: ggltoken, uuid: uid })).then(() => {
                const userToken = JSON.parse(localStorage.getItem('userToken'));
                console.log("userToken ggl", userToken);
                const UserToken = userToken?.token;
                console.log("UserToken ggl", UserToken);

                if (UserToken) {
                    localStorage.setItem('userToken', JSON.stringify({ token: UserToken }));
                    dispatch(editProfile());
                    console.log('inside side effect');
                    console.log("UserToken Set successfully");
                    navigate('/dashboard');
                } else {
                    navigate('/');
                }
                setLoading(false);
            }).catch(() => {
                navigate('/');
                setLoading(false);
            });
        } else {
            navigate('/');
            setLoading(false);
        }
    }, [dispatch, navigate, googleSignIn]);


    // return (
    //     <div className='h-96 flex justify-center items-center'>
    //         <Spinner />
    //     </div>
    // );

    if (loading) {
        return (
            <div className='h-96 flex justify-center items-center'>
                <Spinner />
            </div>
        );
    }

    return null;

};

export default GoogleRedirect;