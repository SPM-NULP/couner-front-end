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
          <img src='assets/logox.png' alt="logo" height="60px" width="80px"/>

            {/* <Logo width='60px' height='60px' /> */}
          </a >
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#home" className={classes.link}>
              Головна
            </a>
            <a href="#controller" className={classes.link}>
            Про пристрій
            </a>
            <a href="#pricing" className={classes.link}>
              Ціни
            </a>
            <a href="#aboutus" className={classes.link}>
              Про нас
            </a>
          </Group>

          {isLogined ? <Group>
            <NavLink to='/overview'>
              <Button variant='default'>Персональний кабінет</Button>
            </NavLink>
          </Group>
            : <Group visibleFrom="sm">
            <NavLink to='/login'>
              <Button variant="default">Login</Button>
            </NavLink>
            <NavLink to='/signup'>
              <Button>Sign up</Button>
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