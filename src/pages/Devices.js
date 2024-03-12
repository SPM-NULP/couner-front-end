import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Devices } from '../components/Devices/devices';
import { SideNav } from '../layouts/dashboard/side-nav';

import { getAll } from '../redux/device-controller/device-operations';
import { selectAllDevices } from '../redux/device-controller/device-selectors';

import './Overview.css';

export const DevicesPage = () => {
    const dispatch = useDispatch()
    const devices = useSelector(selectAllDevices)
    useEffect(() => {
      dispatch(getAll());
    }, [dispatch]);

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
          <Devices
            devices={devices}
          />
        </div>
      </div>
    );
  };