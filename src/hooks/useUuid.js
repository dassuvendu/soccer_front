import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUid } from '../reducers/uuidSlice';

 export const useUuid = () => {
    const { valid } = useSelector((state) => state.uuid);
    // console.log("dat",valid);
     
    const Id = [];
    // console.log("dat2",Id);

    Id.push({
        value: valid?.data,
      });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUid({}))
      },[dispatch])

     return Id;
}
