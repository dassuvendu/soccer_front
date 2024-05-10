import { Modal, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export const ReferModal = ({ openReferModal, setOpenReferModal }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);

  const textInputRef = useRef(null);

  // const copy = () =>{
  //     if (textInputRef.current) {
  //         textInputRef.current.select();
  //         document.execCommand('copy');
  //         // Optionally, you can show a message to indicate the content is copied
  //         alert('Copied to clipboard!');
  //       }

  // }
  const inputRef = useRef(null);

  const [isCopied, setIsCopied] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [usersId,setUsersId] = useState()


  const onCopy = () => {
    const fieldValue = inputRef.current.value; // Access field value using ref
    // console.log("cop", fieldValue);
    navigator.clipboard
      .writeText(fieldValue)
      .then(() => {
        setIsCopied(true);
        setTextInputValue(fieldValue);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        // Handle error if copying fails
      });
  };

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  const userId = localStorage.getItem("userId");

  useEffect(() =>{
    if (userId) {
      // Ensure userId is 8 characters long
      const paddedUserId = userId.padEnd(8, '?1/5').slice(0, 8);
      
      // Generate a random 4-character alphanumeric string
      const randomString = generateRandomString(4);
      
      // Combine userId and random string
      const combinedString =  paddedUserId + randomString  ;
      
      // Encode the combined string
      const encodedUserId = encodeURIComponent(combinedString);
      setUsersId(encodedUserId)
      console.log("Encoded UserId:", encodedUserId);
    } else {
      console.error("UserId not found in localStorage.");
    }
  },[userId])
  
  
  const refId = localStorage.getItem("ref_id");
  const referRegistrationPath = "/signup/ReferRegistration/";
  const url = `${
    import.meta.env.VITE_FRONT_BASE_URL
  }${referRegistrationPath}${usersId}?=${refId}`;

  const handleWps = () => {
    window.open(`https://web.whatsapp.com/send?text=${url}`);
  }
  const handlefb = () => {
    window.open(`http://m.me/send?text=${url}`);
  }
  const handletw = () => {
    window.open(`https://twitter.com/share?text=${url}`);
  }
  return (
    <div>
      <Modal
        show={openReferModal}
        size="5xl"
        onClose={() => setOpenReferModal(false)}
        popup
      >
        <Modal.Header className="absolute right-0 top-0" />
        <Modal.Body>
        
            <div className="w-11/12 pt-6 flex justify-center items-center">
              <div
                className={`${
                  themeMode === "light" ? "text-black" : "text-white"
                } text-[14px] text-normal w-full `}
              >
                <div className="relative w-full p-2 m-4">
                  <input
                    id="npm-install-copy-text"
                    type="text"
                    ref={inputRef}
                    className="col-span-6  text-gray-500 text-md rounded-2xl
                     focus:ring-blue-500 focus:border-blue-500 block 
                     w-full px-4 py-4 dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 
                     dark:focus:border-blue-500 m-2"
                    value={url}
                    readOnly
                  />
                  <button
                    onClick={onCopy}
                    className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
                  >
                    <span className="inline-flex items-center">
                      <svg
                        className="w-3 h-3 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                      <span className="text-xs font-semibold">
                        {isCopied ? "Copied" : "Copy"}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          
          <div className="flex justify-center items-center w-full ">
                  <button className="px-8" onClick={handleWps}>
                    <svg
                      className="w-8 h-8 text-lime-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                      />
                    </svg>
                  </button>
                  <button className="px-8" onClick={handlefb}>
                    <svg
                      className="w-8 h-8  text-blue-700 dark:text-white border-blue-700 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="px-8" onClick={handletw}>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </button>
                  
                </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
