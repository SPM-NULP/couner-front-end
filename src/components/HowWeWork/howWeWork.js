import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Box,
    useMantineTheme,
  } from '@mantine/core';
  import { IconCamera, IconSend, IconLoader, IconGraph, IconCubeSend} from '@tabler/icons-react';
  import classes from './howWeWork.module.css';
  
  const mockdata = [
    {
      title: 'Фотографуємо',
      description:
        "Спершу пристрій фотографує ваш лічильник",
      icon: IconCamera,
    },
    {
      title: 'Відправляємо',
      description:
        'Після чого відправляє фотографію на наш сервер',
      icon: IconSend,
    },
    {
      title: 'Опрацьовуємо',
      description:
        'Нейронна мережа опрацьовуватиме фотографії, зчитуючи значення',
      icon: IconLoader,
    },
    {
      title: 'Формуємо статистику',
      description:
        'На основі показників формуємо статистику',
      icon: IconGraph,
    },
    {
      title: 'Передаємо показники',
      description:
        "Подаємо показники у відповідні комунальні компанії",
      icon: IconCubeSend,
    },
  ];
  
export const FeaturesCards = () => {
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
      <Container size="lg" py="xl" id='howwework'>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Як ми працюємо? 
        </Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Принцип нашої роботи дуже простий. Його можна поділити на 5 етапів.
        </Text>
        <Box justifyContent="center">
          <SimpleGrid 
          // cols={{ base: 1, md: 3 }} spacing="xl" mt={50}
          className={classes.aboutlist} >
            {features}
          </SimpleGrid>
        </Box>
      </Container>
    );
  }