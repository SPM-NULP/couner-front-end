import {
  Card,
  Image,
  Text,
  Badge,
  List, 
  Title,
  Container
} from '@mantine/core';
import classes from './aboutUs.module.css';

const data = [
    {
        img: "https://i.imgur.com/Cij5vdL.png",
        name: 'Roman Baitala',
        position: 'Front-end develpoer'
    },
    {
        img: "https://i.imgur.com/Cij5vdL.png",
        name: 'Vladyslav Kyryk',
        position: 'Android developer'
    },
    {
        img: "https://i.imgur.com/Cij5vdL.png",
        name: 'Volodymyr Vasylyshyn',
        position: 'Android, Back-end develpoer'
    },
    {
        img: "https://i.imgur.com/Cij5vdL.png",
        name: 'Danylo Stetskiy',
        position: 'Embedded developer'
    },
    {
        img: "https://i.imgur.com/Cij5vdL.png",
        name: 'Stanislav Zhurakovski',
        position: 'Designer'
    },
]


// WBA, WBO, NBA player

export const AboutUs = () => {

  return (
    <Container>
    <Title className={classes.headtitle}>Про нас</Title>
    <List className={classes.aboutlist}>
        {data.map((member) => (
            <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <Image src={member.img} height='250px' />
            </Card.Section>
      
            <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
              {member.position}
            </Badge>
      
            <Text className={classes.title} fw={500} component="a" >
              {member.name}
            </Text>
      
            <Text fz="sm" c="dimmed" lineClamp={4}>
                {member.position}
              {/* Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very
              different direction to its predecessor, namely the fact that this time round instead of
              fighting against various mutated zombies, you’re now dealing with more occult enemies like
              werewolves and vampires. */}
            </Text>
          </Card>
        ))}
    </List>
    </Container>
  );
}
