import {Devices} from '../components/Devices/devices'
import { SideNav } from '../layouts/dashboard/side-nav';
import {TopNav} from '../layouts/dashboard/top-nav'
import './Overview.css'

export const DevicesPage = () => {
    return (
      <div style={{
        msOverflowStyle: "none",
        scrollbarWidth: 'none',
        WebkitScrollSnapType: 'none'
      }}>
        <TopNav/>
          <SideNav className='scrollable-bar'/>
        <div style={{
          paddingLeft: 260,
        }}>
          <Devices/>
        </div>
      </div>
    );
  };