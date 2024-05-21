import { Box, Card, CardContent, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDisplaysByDeviceId } from '../../redux/displays-controller/display-operations';
import './device-card.css';

export const DeviceCard = ({ device }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    navigate(`/devices/:${device.serialNumber}`);

    dispatch(getDisplaysByDeviceId(device.serialNumber));
  };

  return (
    <Card
      className="device-card"
      onClick={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        minWidth: '400px',
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
          <img
            src="https://demofree.sirv.com/nope-not-here.jpg"
            alt=""
            width="220px"
            height="220px"
            className="device-img"
          />
          <Stack ml={'30px'}>
            <p className="device-name">{device.name}</p>
            <p className="device-info">
              Газ | Останнія подача показників 12 днів тому
            </p>
          </Stack>
        </Box>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
    </Card>
  );
};
