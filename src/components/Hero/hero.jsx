import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
// import image from './image.svg';
import classes from './hero.module.css';

export function Hero() {
  return (
    <Container size="md" className={classes.heroC}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Набридло</span> подавати показники<br /> лічильника вручну?<br />
            <span className={classes.titleSpan}>Ми зробимо це за тебе!</span> 
          </Title>
        {/*Забув про подачу показників лічильника? Ми зробимо це за тебе!*/}
          <Text c="dimmed" mt="md">
            Встановлюйте наш пристрій та забудьте про зняття та подачу показників!
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Легке встановлення</b> – встановлюйте пристрій за декілька хвилин
            </List.Item>
            <List.Item>
              <b>Корисні сповіщення</b> – отримуйте сповіщення про надмірне споживання ресурсів
            </List.Item>
            <List.Item>
              <b>Зручні сайт та додаток</b> – переглядайте статистику незалежно від вашого місцезнаходження
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Купити
            </Button>
            {/* <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button> */}
          </Group>
        </div>
        {/* <Image src='assets/counter.webp' className={classes.image} /> */}
      </div>
    </Container>
  );
}