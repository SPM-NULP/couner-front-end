import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SideNav } from '../layouts/dashboard/side-nav';
import { Overview } from '../components/Overview/overview'

import { selectDispalys } from 'redux/displays-controller/display-selectors';
import { getDisplaysByDeviceId } from '../redux/displays-controller/display-operations';

import './Overview.css'

export const OverviewPage = () => {
  const dispatch = useDispatch()
  const displays = useSelector(selectDispalys)
  useEffect(()=> {
    // dispatch(getDisplaysByDeviceId())
  }, [dispatch])

    return (
      <div style={{
        msOverflowStyle: "none",
        scrollbarWidth: 'none',
        WebkitScrollSnapType: 'none'
      }}>
        <SideNav className='scrollable-bar'/>
        <div style={{
          paddingLeft: 260,
        }}>
          <Overview
            displays={displays}
          />
        </div>
      </div>
    );
  };