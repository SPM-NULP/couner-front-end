import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { CompanyCard } from '../../sections/companies/company-card';
import {Error} from '../ErrorPage/error'

import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getAll } from '../../redux/device-controller/device-operations'

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'The demo version of smart counter ',
    logo: '/assets/counter1.jpg',
    title: 'SPM smart sensor',
    downloads: '594'
  }
];

export const Devices = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  return (
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    { companies.length === 0 ? <Error></Error> :
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
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
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
        </Stack>
      </Container>}
    </Box>
  </>
  )
};
