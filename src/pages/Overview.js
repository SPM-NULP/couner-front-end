import {Overview} from '../components/Overview/overview'
import { SideNav } from '../layouts/dashboard/side-nav';
import {TopNav} from '../layouts/dashboard/top-nav'
import './Overview.css'

export const OverviewPage = () => {
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
          <Overview/>
        </div>
      </div>
    );
  };