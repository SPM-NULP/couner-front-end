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
  selectUsername, 
  selectFirstName,
  selectLastName
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
  const email = useSelector(selectEmail)
  const phoneNumber = useSelector(selectPhoneNumber)
  const username = useSelector(selectUsername)
  const name = useSelector(selectFirstName)
  const surname = useSelector(selectLastName)

  const [values, setValues] = useState({
    firstName: name,
    lastName: surname,
    email: email ? `${email}` : '',
    username: username ? `${username}` : '',
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
