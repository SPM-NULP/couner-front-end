import { Group } from '@mantine/core';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  TextField
} from '@mui/material';

import { useState } from 'react';

const val = 'ssdsds'
const batterycapacity = 100

export const DeviceInfo = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

    const disableButton = () => {
        setButtonDisabled(true);
    };

    const enableButton = () => {
        setButtonDisabled(false);
    };
  return (
    <Card sx={{mb:'20px'}}>
      <CardHeader
        title="Інформація про пристрій"
      />
      <CardContent> 
        <Typography>Нзава пристрою</Typography>
        <Group sx={{ 
          justifyContent: 'flex-end', 
          flexWrap: 'nowrap'
        }}>
          <TextField
            name="device"
            onChange={enableButton}
            required
            type='text'
            defaultValue={val}
          /> 
          <button id="button" type='submit' onClick={disableButton} disabled={isButtonDisabled}>Зберегти</button>
          <Typography>Заряд батареї {batterycapacity}%</Typography> 
        </Group>
        {/* value => зробити як вхідні дані (назва пристрою) */}
        {/* зробити як інпут тобто назву можна міняти */}
        
        {/* зробити відображення поточного заряду пристрою за допомогою */}
      </CardContent>
      <Divider />
    </Card>
  );
};
