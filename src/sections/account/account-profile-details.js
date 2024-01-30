import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

import { useSelector } from 'react-redux'
// import { getUserData } from '../../redux/user/user-operations'
import React from 'react';
import {
  selectEmail, 
  // selectId, 
  selectPhoneNumber, 
  selectUsername
} from '../../redux/user/user-selectors'

const states = [
  {
    value: 'львів',
    label: 'Львів'
  },
  {
    value: 'київ',
    label: 'Київ'
  },
  {
    value: 'вінниця',
    label: 'Вінниця'
  },
  {
    value: 'тернопіль',
    label: 'Тернопіль'
  }
];

export const AccountProfileDetails = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUserData())
  // }, [dispatch])

  const email = useSelector(selectEmail)
  const phoneNumber = useSelector(selectPhoneNumber)
  const username = useSelector(selectUsername)
  console.log(username)
  // // const id = selectId()
  // const email = selectEmail()
  // const phoneNumber = selectPhoneNumber()
  // const username = selectUsername()

  const [values, setValues] = useState({
    // id: id,
    firstName: 'Іван',
    lastName: 'Іваненко',
    email: `${email}`,
    username: `${username}`,
    phone: phoneNumber ? `${phoneNumber}` : '',
    state: 'Львів',
    country: 'Україна'
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          // subheader="The information can be edited"
          title="Профіль"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Ім'я"
                  name="Ім'я"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Прізвище"
                  name="Прізвище"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Користувацьке ім'я"
                  name="користувацьке ім'я"
                  onChange={handleChange}
                  required
                  value={values.username}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Електронна Адреса"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Номер телефону"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Країна"
                  name="країна"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Область"
                  name="область"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Зберегти дані
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
