import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { OverviewLatestDisplays } from '../../sections/overview/overview-latest-indx';
import { OverviewSales } from '../../sections/overview/overview-stat';

export const Overview = ({displays}) => {
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
            width={'100%'}
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewLatestDisplays
              displays={displays}
              // orders={[
              //   {
              //     id: 'f69f88012978187a6c12897f',
              //     indx: '64549',
              //     amount: 30.5,
              //     used:'34',
              //     createdAt: 1555016400000,
              //     status: 'Подано'
              //   },
              // ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};
