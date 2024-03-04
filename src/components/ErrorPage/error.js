import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import { Box, Button, Container, SvgIcon, Typography, Grid} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';

export const Error = ({MainMessage, SubMessage}) => {
    return(
        <>
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            mb: 3
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box
                sx={{
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                {/* <img
                  alt="Under development"
                  src="/assets/errors/error-404.png"
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 400
                  }}
                /> */}
              </Box>
              <Typography
                align="center"
                sx={{ mb: 3 }}
                variant="h5"
              >
                {MainMessage}
              </Typography>
              <Typography
                align="center"
                color="text.secondary"
                variant="body1"
              >
                {SubMessage}
              </Typography>
              <Grid
                sx={{ mt: 3 }}
                >
        
              <Button
                href="/counter-front-end/overview"
                startIcon={(
                  <SvgIcon fontSize="small">
                    <ArrowLeftIcon />
                  </SvgIcon>
                )}
                sx={{ mr: 1 }}
                variant="contained"
              >
                Повернутись на головну
              </Button>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained">
                Додати пристрій 
              </Button>
              </Grid>
            </Box>
          </Container>
        </Box>
      </>
    )
}