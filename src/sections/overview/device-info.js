import { Card, CardContent, CardHeader, Divider } from '@mui/material';
// import {
//   Battery100Icon,
//   Battery50Icon,
//   Battery0Icon,
// } from '@heroicons/react/24/solid';
import { SearchInput } from 'components/Devices/input-device-name';
import './owerviev.css';

const batterycapacity = 100;

export const DeviceInfo = () => {
  // const battery = () => {
  //   if (batterycapacity >= 50) {
  //     return (
  //       <SvgIcon fontSize="medium">
  //         <Battery100Icon />
  //       </SvgIcon>
  //     );
  //   }
  //   if (batterycapacity <= 50) {
  //     return (
  //       <SvgIcon fontSize="medium">
  //         <Battery50Icon />
  //       </SvgIcon>
  //     );
  //   } else {
  //     return (
  //       <SvgIcon fontSize="medium">
  //         <Battery0Icon />
  //       </SvgIcon>
  //     );
  //   }
  // };
  return (
    <Card sx={{ mb: '20px' }}>
      <CardHeader title="Інформація про пристрій" />
      <CardContent>
        <div className="flex-device-info">
          <div>
            <p className="input-title">Нзава пристрою</p>
            <SearchInput></SearchInput>
          </div>
          <div className="flex-device-battery">
            <p className="input-title">Заряд батареї: {batterycapacity}%</p>
          </div>
        </div>
        {/* value => зробити як вхідні дані (назва пристрою) */}
        {/* зробити як інпут тобто назву можна міняти */}

        {/* зробити відображення поточного заряду пристрою за допомогою */}
      </CardContent>
      <Divider />
    </Card>
  );
};
