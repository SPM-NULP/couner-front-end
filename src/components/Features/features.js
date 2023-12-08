import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  
  import { IconWallet, IconArrowFork, IconChartBar } from '@tabler/icons-react';
  import classes from './features.module.css';
  
  const mockdata = [
    {
      title: 'Універсальність',
      description:
        'Встановлюйте пристрій на лічильники будь-якого типу',
      icon: IconArrowFork,
    },
    {
      title: 'Корисна статистика',
      description:
        'Переглядайте статистику про споживання ресурсів на сайті та в нашому додатку',
      icon: IconChartBar,
    },
    {
      title: 'Вартість пристрою',
      description:
        'Завдяки використанню простих та якісних компонентів ціна пристрою є значно нижчою ніж в конкурентів',
      icon: IconWallet,
    },
  ];
  
export const Features = () => {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Наші переваги
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }