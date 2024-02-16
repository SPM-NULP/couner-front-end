import { Container, Group, ActionIcon, rem, Box, useMantineTheme } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './footer.module.css';
import '@mantine/core/styles.css';

export function Footer() {
  const theme = useMantineTheme();
  return (
    <Box color={theme.colors.dark[2]}>
      <div className={classes.footer} color={theme.colors.dark[2]}>
        <Container className={classes.inner} color={theme.colors.dark[2]}>
          <Box>
          <img src="https://lh3.googleusercontent.com/pw/ABLVV85bweoz0Zy0U9LZvkJqc2-oR2bnr2extYJR7PSMa0fHc9-r1X2ImkUII97NQN9qSOTjlV2n1a17fejjHa9E7jHDIoj_FNTy9Zb8q274u_zeYwVMUk0=w600-h315-p-k" alt="logo" height="60px" width="80px" />
          </Box>
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