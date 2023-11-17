import PropTypes from 'prop-types';
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
  Box,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Logo } from '../../../src/components/logo';
import { Scrollbar } from '../../../src/components/scrollbar';
import { SideNavItem } from './side-nav-item';

import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import ComputerDesktopIcon from "@heroicons/react/24/solid/ComputerDesktopIcon";
import UserIcon from '@heroicons/react/24/solid/UserIcon';


export const items = [
  {
    title: 'Головна',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
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
  // {
  //   title: 'Customers',
  //   path: '/customers',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
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
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];



export const SideNav = (props) => {

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
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                Назва пристрою
              </Typography>
              <Typography
                // color="neutral.400"
                variant="body2"
              >
                Production
              </Typography>
            </div>
            <SvgIcon
              fontSize="small"
              // sx={{ color: 'neutral.500' }}
            >
              <ChevronDownIcon />
            </SvgIcon>
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
            /*To hide scrollbars*/
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


  // return (
  //   <Drawer
  //     anchor="left"
      
  //     onClose={onClose}
  //     // open={true}
  //     PaperProps={{
  //       sx: {
  //         // backgroundColor: 'neutral.800',
  //         // color: 'common.white',
  //         width: 280,
  //         display: 'flex'
  //       }
  //     }}
  //     sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
  //     variant="temporary"
  //   >
  //     {content}
  //   </Drawer>
  // );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
