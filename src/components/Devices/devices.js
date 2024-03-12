import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Card,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { CompanyCard } from '../../sections/companies/company-card';
import {Error} from '../ErrorPage/error'

// import {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import { getAll } from '../../redux/device-controller/device-operations'
import {PlusIcon, ArrowLeftIcon} from '@heroicons/react/24/solid';
// import {selectAllDevices} from '../../redux/device-controller/device-selectors'

// const companies = [
//   // {
//   //   id: '2569ce0d517a7f06d3ea1f24',
//   //   createdAt: '27/03/2019',
//   //   description: 'The demo version of smart counter ',
//   //   logo: '/assets/counter1.jpg',
//   //   title: 'SPM smart sensor',
//   //   downloads: '594'
//   // }
// ];

const buttonsError = [
  {
    btn_text: 'Повернутись на головну',
    icon: <ArrowLeftIcon />,
    href: '/counter-front-end/overview'
  },
  {
    btn_text: 'Додати пристрій',
    icon: <PlusIcon />,
    href: '/counter-front-end/overview'
  }
]

export const Devices = ({devices}) => {
  return (
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Пристрої
              </Typography>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Додати пристрій 
              </Button>
            </div>
          </Stack>
          {devices === undefined || devices.length === 0 ? 
            <Card>
              <Error
                MainMessage="Схоже у вас ще немає активних пристроїв"
                SubMessage="Ви можете додати новий пристрій на цій сторінці"
                buttons={buttonsError}
              ></Error>
            </Card>
            :
            <Grid
              container
              spacing={3}
            >
              {devices.map((company) => (
                <Grid
                  xs={12}
                  md={6}
                  lg={12}
                  key={company.id}
                >
                  <CompanyCard company={company} />
                </Grid>
              ))}
            </Grid>
          }
        </Stack>
      </Container>
    </Box>
  </>
  )
};
