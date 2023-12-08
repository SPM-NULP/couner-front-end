// import { useCallback } from 'react';
// import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuList, Popover, Typography, Button } from '@mui/material';
// import { useAuth } from '../../../src/hooks/use-auth';
// import {useState} from ''
// import {selectIsLoggedIn} from '../../redux/auth/auth-selectors'
import {NavLink} from 'react-router-dom'
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  logoutUser } from '../../redux/auth/auth-operations';
export const AccountPopover = (props) => {
  const dispatch = useDispatch()

  const { onClose, open } = props;

  const handleClick = () => {
    dispatch(logoutUser())
  }
  // const roufter = useRouter();
  // const auth = useAuth();

  // const handleSignOut = useCallback(
  //   () => {
  //     onClose?.();
  //     auth.signOut();
  //     // router.push('/auth/login');
  //   },
  //   [onClose, auth]
  // );

  return (
    <Popover
      // anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
      }}
      onClose={onClose}
      open={open}
      // PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Профіль
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Anika Visser
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      ><NavLink to='/login'>
        <Button onClick={handleClick}>
          Вийти
        </Button>
      </NavLink>
        
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
