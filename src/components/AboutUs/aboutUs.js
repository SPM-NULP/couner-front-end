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
        img: "https://lh3.googleusercontent.com/pw/ABLVV85uuzlZOOsOWHqzNPkXjE4Nlf7XVTgSaaCKqvphhSVYoU87EALqWP92lQKXcgLdZ7NZBlTZa70xV-sAA390MFz6n-CyNrQUJcCY_A1iRRgROI0Y4-0=w600-h315-p-k",
        name: 'Roman Baitala',
        position: 'Front-end develpoer'
    },
    {
        img: "https://lh3.googleusercontent.com/pw/ABLVV85gsfkMSkqn3PT7O15lx1va_Y-H6HCzJxLuOqYu6tHhvtW27_oExd1HmhAE8fBWdwPtX77PrrCsHNqS0CIIvCPJELiaXwtCQAzukXsYRfsI9hyJ8zc=w600-h315-p-",
        name: 'Vladyslav Kyryk',
        position: 'Android developer'
    },
    {
        img: "https://lh3.googleusercontent.com/pw/ABLVV85pWppMb9C4WbDiK2pWUh-Cx_wvzu9s14MgrgYokP-nt3r4KjSerEj-lRUbI8PBSc3q-26CW5vr5-hjnEzfaWFmT5LKQC38F9YxrtvEFfY0hOqZc_o=w600-h315-p-k",
        name: 'Volodymyr Vasylyshyn',
        position: 'Android, Back-end develpoer'
    },
    {
        img: "https://lh3.googleusercontent.com/pw/ABLVV86m73sbdQ9kPkFo6NougIlSBvRnA5nw-MU9dUjPjbRdGxtAGRUKTvbdYZ0uvF274lsKClH6LRSa6SdR7Ywy4DSaCF2f524LklWS5lbB1NPC3tSybfw=w600-h315-p-k",
        name: 'Danylo Stetskiy',
        position: 'Embedded developer'
    },
    {
        img: "https://lh3.googleusercontent.com/pw/ABLVV847xq0VFwLgmtUBe1El-bG9OM5Gna0PL2y23wrbxtlZBjXkaRS6rg-EB3-PoLyyyeZ6Re10kClFA0NRrXiPPGdSreiPJM1uo4FGXTC9U4nEbAlkDtg=w600-h315-p-k",
        name: 'Stanislav Zhurakovski',
        position: 'Designer'
    },
]


// WBA, WBO, NBA player

export const AboutUs = () => {

  return (
    <Container id='aboutus'>
    <Title order={2} className={classes.title} ta="center" mt="sm">
      Про нас
    </Title>
    <List className={classes.aboutlist} mb="0px">
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
            </Text>
          </Card>
        ))}
    </List>
    </Container>
  );
}
