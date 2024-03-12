import { Box, Button, Container, SvgIcon, Typography, Grid} from '@mui/material';

export const Error = ({MainMessage, SubMessage, buttons}) => {
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
                {buttons.map((btn) => (
                  <Button
                    href={btn.href}
                    startIcon={(
                      <SvgIcon fontSize="small">
                        {btn.icon}
                      </SvgIcon>
                    )}
                    sx={{ mr: 1 }}
                    variant="contained"
                  >
                    {btn.btn_text}
                  </Button>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </>
    )
}