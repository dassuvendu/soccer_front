import { Modal, Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LastFixtures, postpredictions } from '../../../reducers/PredictionsSlice';

export const RequestModal = ({openViewDetailsModal,onClose,homeTeamId}) => {
  console.log("team",homeTeamId);
    const themeMode = useSelector((state) => state.darkmode.mode)
    const { lastResult } = useSelector((state) => state.prediction)
    console.log("tr",lastResult);
    const [loadingModalData, setLoadingModalData] = useState(true);

   const dispatch = useDispatch()

    useEffect(() => {
      dispatch(LastFixtures({ "team": homeTeamId , "last": 5 }))

    }, [dispatch,homeTeamId])

    const handleModal = () => {
      onClose();
    };
  return (
    <div>
         {openViewDetailsModal && (
          <Modal
          show={openViewDetailsModal}
          size="4xl"
          onClose={handleModal}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="pt-8 pb-2">
              <h2 className="font-Bebas text-3xl tracking-normal text-[#2aa9e1] mb-4">
                Match Details
              </h2>
              <div className="pt-6 pb-4 px-3 mb-4 border-b border-gray-300">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <img
                      // src={DeportivoPastoIcon}
                      alt="DeportivoPastoIcon"
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${
                        themeMode === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Deportivo Pasto
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <div>
                      <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                        Kick Off
                      </p>
                      <h3 className="text-[#2aa9e1] text-[18px] leading-[24px] font-medium">
                        Tue, 12 March, 2024
                      </h3>
                      <h3 className="text-black text-[18px] leading-[24px] font-medium">
                        1:30 PM
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <img
                      // src={EnvigadoIcon}
                      alt="EnvigadoIcon"
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${
                        themeMode === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Envigado
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-Bebas text-xl tracking-normal text-black mb-4">
                  History
                </h4>
                <div>
                 
                
                  {lastResult.map((data)=>(
                 <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3" key={data.id}>
 <div className="text-center">
   <img
     src={data?.teams?.home?.logo}
     alt="DeportivoPastoIcon"
     className="inline-block mb-2 w-10"
   />
 </div>
 <div className="text-center">
   <div className="bg-[#2aa9e1] py-2 rounded-full">
     <h3 className="text-white text-base">{data?.goals?.home}-{data?.goals?.away}</h3>
   </div>
 </div>
 <div className="text-center">
   <img
     src={data?.teams?.away?.logo}
     alt="EnvigadoIcon"
     className="inline-block mb-2 w-10"
   />
 </div>
                 </div>
                  ))}
            
               


                </div>
               
                <div className="mb-0">
                <h4 className="font-Bebas text-xl tracking-normal text-black mb-4">
                  Last 5 matches
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <ul className="flex items-center">
                      <li>
                        <img
                          // src={DeportivoPastoIcon}
                          alt="DeportivoPastoIcon"
                          className="inline-block mb-0 w-8"
                        />
                      </li>
                      <li className="ml-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                        W
                      </li>
                      <li className="ml-1.5 bg-[#1f2937] text-[14px] text-white px-2 rounded">
                        D
                      </li>
                      <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                        W
                      </li>
                      <li className="ml-1.5 bg-[#1f2937] text-[14px] text-white px-2 rounded">
                        D
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex items-center">
                      <li className="mr-1.5 bg-[#1f2937] text-[14px] text-white px-2 rounded">
                        D
                      </li>
                      <li className="mr-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li className="mr-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li className="mr-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                        W
                      </li>
                      <li className="mr-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li>
                        <img
                          // src={EnvigadoIcon}
                          alt="EnvigadoIcon"
                          className="inline-block mb-2 w-8"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
               
              </div>
           
              </div>
            </div>
          </Modal.Body>
        
         
        </Modal>
        )}
      
    </div>
  )
}
