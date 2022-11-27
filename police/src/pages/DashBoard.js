import React,{useEffect,useState} from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db,realDB, logout } from "../server/firebase";
import {ref,get} from 'firebase/database'

import Useritem from '../Components/Useritem';

import './dashboard.css'
import ImageQ from '../static/policelogo.png'
import serachIcon from '../static/magnifying.png'

export default function DashBoard(props){
    const [user, loading, error] = useAuthState(auth);
    const [data,getData] = useState([]);
    const [sorted,setSorted] = useState([]);
    const [loadingData,setDataLoad] = useState(false)

    useEffect(()=>{
        const apiCall = async () =>{
            let dbRef = ref(realDB,"Users");
            get(dbRef).then(async (snapshot)=>{
                if(snapshot.exists()){
                    await snapshot.forEach((e)=>{getData(current=>[...current,e.toJSON()]);setSorted(current=>[...current,e.toJSON()])})
                    console.log("DataLoaded")
                    setDataLoad(true)
                }
            })
        }

        if(data.length == 0){
            apiCall()
        }
    },[])

    const setFiltersArray = (name) =>{
        const sDat = data.filter((e)=>e.name.includes(name))
        setSorted(sDat)
    }

    return (
        <>
            <div className='container'>
                <img src={ImageQ} alt="Rendering Image"/>
            </div>

            <div className='serach_container'>
                <div className='s_container'>
                    <input type='text' onChange={(e)=>{setFiltersArray(e.target.value)}} className="serachBar" placeholder='Search..'/>
                    <img src={serachIcon} alt="as" className='searchImg'/>
                </div>
            </div>


            <div className='users_container'>
                <div className='user_list'>
                    {loadingData ? 
                    
                    <>
                    <div className='list_item_User'>
                        {sorted.map((e)=>{
                            return (
                                <Useritem 
                                name={e.name}
                                key={e.dob}
                                phoneNo={e.phone_number}
                                bloodGrp={e.blood_group}
                                age={e.age}
                                dob={e.dob}
                                height={e.height}
                                weight={e.weight}
                                emgPhone={e.emergency_contact} />
                            );
                        })}
                    </div>
                    </>
                    :<>Loading Data Kindly Wait</>}
                </div>
            </div>
        </>
    );
}