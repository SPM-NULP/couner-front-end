import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDisplaysByDeviceId } from '../../redux/displays-controller/display-operations'

export const CompanyCard = ({device}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = () => {
    navigate(`/devices/:${device.serialNumber}`)
    
    dispatch(getDisplaysByDeviceId(device.serialNumber))
  }

  return (
    // eslint-disable-next-line
    // <a href='' onClick={handleSubmit} >
      <Card
      onClick={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
        }}
      >
      <CardContent>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <img src="https://demofree.sirv.com/nope-not-here.jpg" alt='' width="100px" height="100px" />
          <Stack ml={'20px'}>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
            >
              {device.name}
            </Typography>
            {/* <Typography
              align="center"
              variant="body1"
            >
              Тип: {device.counterType}
            </Typography> */}
          </Stack>
        </Box>
      </CardContent>
        <Box sx={{ flexGrow: 1 }} />
      </Card>
    // </a>
    
  );
};

