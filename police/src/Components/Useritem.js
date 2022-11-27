import React from 'react'
import './useritem.css'

import userIcon from '../static/Group_3.png'
export default function Useritem(props){


    return(
        <>
        <div className='user_item_container'>
            <div className='image_container'>
                <img src={userIcon} alt="DATA"/>
            </div>
            <div className='info_container'>
                <div className='item'>
                    <div className='itemKey'>Name :</div>
                    <div className='itemVal'>{props.name}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>Contact Information :</div>
                    <div className='itemVal'>{props.phoneNo}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>Blood Group :</div>
                    <div className='itemVal'>{props.bloodGrp}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>Age :</div>
                    <div className='itemVal'>{props.age}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>DOB :</div>
                    <div className='itemVal'>{props.dob}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>Height :</div>
                    <div className='itemVal'>{props.height}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>Weight :</div>
                    <div className='itemVal'>{props.weight}</div>
                </div>

                <div className='item'>
                    <div className='itemKey'>Emergency Contact :</div>
                    <div className='itemVal'>{props.emgPhone}</div>
                </div>
            </div>
        </div>
        </>
    );

}