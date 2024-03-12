import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
} from '@mui/material';
import { Scrollbar } from '../../../src/components/scrollbar';
import { SideNavItem } from './side-nav-item';
import { 
  HomeIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  CogIcon,
  ComputerDesktopIcon,
  UserIcon
} from '@heroicons/react/24/solid';
import {Avatar} from '@mui/material';
import classes from './dashboard.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  logoutUser } from '../../redux/auth/auth-operations';
import {Logout} from '@mui/icons-material';
// import ListItemIcon from '@mui/material/ListItemIcon';
import {selectEmail, selectFirstName, selectLastName} from '../../redux/user/user-selectors'

export const items = [
  {
    title: 'Головна',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <HomeIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Магазин',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingCartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Огляд',
    path: '/overview',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Мої пристрої',
    path: '/devices',
    icon: (
      <SvgIcon fontSize="small">
        <ComputerDesktopIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Профіль',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Налаштування',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
];

export const SideNav = (props) => {
  const dispatch = useDispatch()
  const email = useSelector(selectEmail)
  const name = useSelector(selectFirstName)
  const surname = useSelector(selectLastName)
  const logout = () => {
    dispatch(logoutUser())
  }
  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              mt: 2,
              p: '12px'
            }}
          >
            <Avatar sx={{ width: 32, height: 32, marginRight: '15px' }} >{name[0]}</Avatar>
            <ul className={classes.profile_data}>
              <li>
                <p className={classes.profile_name}>{name} {surname}</p>
              </li>
              <li>
                <p className={classes.profile_email}>{email}</p>
              </li>
            </ul>
            <div className={classes.logouticon}>
              <NavLink to='/' onClick={logout}>
                  <Logout fontSize="small" />
              </NavLink>
            </div>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              const active = item.path 
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
      </Box>
    </Scrollbar>
  );

    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            width: 280,
            height: "100%",
            overflowX: 'hidden',
            overflowY: 'hidden',
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
}

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
