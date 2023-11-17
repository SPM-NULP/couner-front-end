import { Container, Group, ActionIcon, rem, Box, useMantineTheme } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';
import classes from './footer.module.css';
import '@mantine/core/styles.css';

// import logo from '../../assets/logo.png'
import {Logo} from '../logo'

export function Footer() {
  const theme = useMantineTheme();
  return (
    <Box color={theme.colors.dark[2]}>
      <div className={classes.footer} color={theme.colors.dark[2]}>
        <Container className={classes.inner} color={theme.colors.dark[2]}>
          {/* <a href="#home" exact className="nav-logo"> */}
          <Box>
          <Logo width="50px" height="50px" />
          </Box>
            {/* <img src={logo} alt="logo" width="80px" height="60px" className='logo' href="#home"/> */}
          {/* </a > */}
          <Group color={theme.colors.dark[2]} gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </Box>
  );
}