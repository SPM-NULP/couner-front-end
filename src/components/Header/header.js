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

// import {Logo} from '../logo'

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
            {/* <img src='https://lh3.googleusercontent.com/pw/ABLVV86cvpYZ_KyN5LybQESTMMXLzisGO423xWLJgmKloQIZ6Pj8bFEs-wjc-CrwMSPdcN-RxtjzdfxHp_3GWCpDM1xn2mihumfw8u6wInukVdN5LZqA1qHbPQkJIzSfKHtB5EZ0vmVSwSLMBBq9bkGrgfcz6qkT-Fcg0pV34XwrFbhe8Q1o2MSZrjjafkvc7EcBCieSlghaJl-zc2nykjoskUlg_rkKbOumZIGWDMkeGfWLsalotslP9qZZTFgKmGD-EdFopZt4zOdJzuhOPx_XfjstGQSJ71tGadDZLJ0SnMaVTID1kFtikpL_U91rnhjDb7yjfUqoK-pszYzfnskjH0RISMJraV1W8tvVHbjRYU-QNoxbIozv2kNgNxMXzOUthylf0pJgi2MuqpzIV6F-cgQpz2YRI6WgpLxum3r8zE9Eu6tD38dNDIaSpwkBR9vHdpXfSIodaAgpsW1cfHOvoGiZA9KNnbQ9k_N7dvOaGHspLfdIgG85eecU2I35UGNb35gQSz0K1Cz5wIsK974vHTxfflVYvzxYzUkDlTKCOUxMwBqXSm4DeJFMA5XkEQyjMwHT5D6ojLY0KRKr5iA82jdPidkJcGvDhTOWQ665hkyH4ahyo9NRRRyaanhlRau1Xl7qaiknjJGtJzKNc9emTNBRGCrgWj7MKPgtU8SgdaJXn-LJh3klrXogQXilQr0ADpwvWHTRnBlCnC-B76O1Qbyg18FyPkH3R6MCI8iyTSrAkJqAf5szjJb6gYWOO1MFSbMNVhGxLt_ucBfLifGyHognkndwPU-VacCal9X5-xbf9nr8QxewzC8h3eO3HII8o5IZeNnpszw89Bx-2Aia_NafVmmgJyVDhgW3Hp590wBANpa4fIfVwTuSsFrFcHuytuwA5g31gWHnlWBsT28BojlXMlsMOFHLT06SuOKFoQWw8Vs7MQViuTV52Q2qklxTleDUA93aldvi_Vw=w660-h420-s-no-gm?authuser=0' alt='logo'/> */}
            {/* <img src='https://drive.google.com/uc?export=view&id=1nkbZzHQg6UoGFLRc6rjN-kpD9qQdOs-X' alt="logo" height="60px" width="80px"/> */}
            {/* <Logo width='60px' height='60px' /> */}
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

          {isLogined ? <Group>
            <NavLink to='/overview'>
              <Button variant='default'>Персональний кабінет</Button>
            </NavLink>
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