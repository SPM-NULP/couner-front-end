import {Account} from '../components/Account/account'
import { SideNav } from '../layouts/dashboard/side-nav';
// import {TopNav} from '../layouts/dashboard/top-nav'
import './Overview.css'

import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from '../redux/user/user-operations'
import React, { useEffect } from 'react';
import {
  selectEmail, 
  selectPhoneNumber, 
  selectUsername
} from '../redux/user/user-selectors'

export const AccountPage = () => {
  const dispatch = useDispatch()

  const email = useSelector(selectEmail)
  const phoneNumber = useSelector(selectPhoneNumber)
  const username = useSelector(selectUsername)

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch])
  
    return (
      <div style={{
        msOverflowStyle: "none",
        scrollbarWidth: 'none',
        WebkitScrollSnapType: 'none'
      }}>
        {/* <TopNav/> */}
          <SideNav className='scrollable-bar'/>
        <div style={{
          paddingLeft: 260,
        }}>
          <Account 
          phoneNumber={phoneNumber} 
          email={email}
          username={username}
          />
        </div>
      </div>
    );
  };