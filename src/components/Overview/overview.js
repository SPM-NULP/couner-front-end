import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { OverviewLatestOrders } from '../../sections/overview/overview-latest-indx';
import { OverviewSales } from '../../sections/overview/overview-stat';

export const Overview = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            lg={12}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'Цього року',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Минулого року',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  indx: '64549',
                  amount: 30.5,
                  used:'34',
                  createdAt: 1555016400000,
                  status: 'Подано'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  indx: '64540',
                  amount: 25.1,
                  used:'34',
                  createdAt: 1555016400000,
                  status: 'На сервері'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  indx: '64532',
                  amount: 10.99,
                  used:'34',
                  createdAt: 1554930000000,
                  status: 'На сервері'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  indx: '64500',
                  amount: 96.43,
                  used:'34',
                  createdAt: 1554757200000,
                  status: 'На сервері'
                },
                {
                  id: '9f974f239d29ede969367103',
                  indx: '64470',
                  amount: 32.54,
                  used:'34',
                  createdAt: 1554670800000,
                  status: 'На сервері'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  indx: '64456',
                  amount: 16.76,
                  used:'34',
                  createdAt: 1554670800000,
                  status: 'На сервері'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
