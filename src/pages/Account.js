import {Account} from '../components/Account/account'
import { SideNav } from '../layouts/dashboard/side-nav';
import {TopNav} from '../layouts/dashboard/top-nav'
import './Overview.css'

export const AccountPage = () => {
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
          <Account/>
        </div>
      </div>
    );
  };