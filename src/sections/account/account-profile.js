import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

import {useSelector} from 'react-redux'
import {selectFirstName, selectLastName} from '../../redux/user/user-selectors'

const user = {
  avatar: '',
  city: 'Львів',
  country: 'Україна',
  name: '',
  timezone: 'GTM-2'
};

export const AccountProfile = () => {
  const name = useSelector(selectFirstName)
  const surname = useSelector(selectLastName)
  return (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {user.avatar ? <Avatar
          src={user.avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        /> :
        <Avatar
          sx={{
            height: 80,
            mb: 2,
            width: 80,
            fontSize: 50
          }}
        >{name[0]}</Avatar>}
        <Typography
          gutterBottom
          variant="h5"
        >
          {name} {surname}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.city}, {user.country}
        </Typography>
        {/* <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.timezone}
        </Typography> */}
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        fullWidth
        variant="text"
      >
        Завантажити фото профілю
      </Button>
    </CardActions>
  </Card>)
};
