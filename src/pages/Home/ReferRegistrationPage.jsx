import React, { useEffect, useState } from 'react'
import Login from '../Auth/Login/Login'
import ReferRegistration from './ReferRegistration';

export const ReferRegistrationPage = () => {

    const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(true);
    
//   const RegisterModal = () =>{
//     setOpenLoginModal(false);
//     setOpenRegisterModal(true)
   
//   }
//   useEffect(() =>{
//     setOpenLoginModal(false);
//     setOpenRegisterModal(true)
//   },[openRegisterModal])

  useEffect(()=>{
    console.log("openLoginModal",openLoginModal);
    console.log("openRegisterModal",openRegisterModal);
      },[openLoginModal,openRegisterModal])

  return (
    <div>
     {openRegisterModal && 
    <ReferRegistration
         openRegisterModal={openRegisterModal}
         setOpenRegisterModal={setOpenRegisterModal}
         setOpenLoginModal={setOpenLoginModal}
        />
    }

{openLoginModal && 
<Login
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
      />
}
    </div>
  )
}
