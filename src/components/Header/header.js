import * as React from 'react';
import {
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,

} from '@mantine/core';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import {
  Logout,
  Settings, 
  Person,
  Computer,
  DataUsage
} from '@mui/icons-material';

import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './header.module.css';
import {useSelector} from 'react-redux'
import {selectToken} from '../../redux/auth/auth-selectors'
import '@mantine/core/styles.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  logoutUser } from '../../redux/auth/auth-operations';
import {selectEmail, selectFirstName, selectLastName} from '../../redux/user/user-selectors'
// import {select} from '../../redux/user/user-selectors'

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export const Header = () => {
  const isLogined = useSelector(selectToken)
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const email = useSelector(selectEmail)
  const name = useSelector(selectFirstName)
  const surname = useSelector(selectLastName)
  const logout = () => {
    dispatch(logoutUser())
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="#home" exact >
            <img src="https://lh3.googleusercontent.com/pw/ABLVV85bweoz0Zy0U9LZvkJqc2-oR2bnr2extYJR7PSMa0fHc9-r1X2ImkUII97NQN9qSOTjlV2n1a17fejjHa9E7jHDIoj_FNTy9Zb8q274u_zeYwVMUk0=w600-h315-p-k" alt="logo" height="60px" width="80px" />
          </a >
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#home" className={classes.link}>
              Головна
            </a>
            <a href="#features" className={classes.link}>
              Переваги
            </a>
            <a href="#aboutus" className={classes.link}>
              Про нас
            </a>
            <a href="#howwework" className={classes.link}>
              Як ми працюємо
            </a>
          </Group>
          {isLogined ?
          <Group>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Профіль">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>{name[0]}</Avatar>
            </IconButton>
          </Tooltip>
        </Box> 
          <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem sx={{paddingBottom: "4px", paddingTop: '4px' }}>
            <Avatar sx={{ width: 32, height: 32, }} >{name[0]}</Avatar>
            <ul className={classes.profile_data}>
              <li>
                <p className={classes.profile_name}>{name} {surname}</p>
              </li>
              <li>
                <p className={classes.profile_email}>{email}</p>
              </li>
            </ul>
          </MenuItem>
          <Divider mb={'4px'} mt={'4px'}/>
          <MenuItem onClick={handleClose} sx={{paddingBottom: "4px", paddingTop: '4px'}}>
            <ListItemIcon>
              <DataUsage fontSize="small" />
            </ListItemIcon>
            <NavLink to='/overview'>Статистика</NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{paddingBottom: "4px", paddingTop: '4px' }}>
            <ListItemIcon>
              <Computer fontSize="small" />
            </ListItemIcon>
              <NavLink to='/devices'>
                Мої пристрої 
              </NavLink>
          </MenuItem>
          <Divider mb={'4px'} mt={"4px"}/>
          <MenuItem onClick={handleClose} sx={{paddingBottom: "4px", paddingTop: "4px" }}>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            <NavLink to='/account'>Профіль</NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{paddingBottom: "4px", paddingTop: "4px"}}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <NavLink to='/settings'>Налаштування</NavLink>
          </MenuItem>
          <Divider mb={'4px'} mt={"4px"} />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <NavLink to='/' onClick={logout}>
                Вийти
            </NavLink>
          </MenuItem>
        </Menu>
        </Group>
            : <Group visibleFrom="sm">
            <NavLink to='/login'>
              <Button variant="default">Логін</Button>
            </NavLink>
            <NavLink to='/signup'>
              <Button>Реєстрація</Button>
            </NavLink>
          </Group>
          }
          <Burger className='icon' opened={drawerOpened} color='#fff' onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="#home" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#home" className={classes.link}>
            Learn
          </a>
          <a href="#home" className={classes.link}>
            Academy
          </a>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <NavLink to='/login'>
              <Button variant="default">Log in</Button>
            </NavLink>
            <NavLink to='/signup'>
              <Button>Sign up</Button>
            </NavLink>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}