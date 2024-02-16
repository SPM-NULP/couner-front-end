import PropTypes from 'prop-types';
import { Box, Divider, MenuList, Popover, Typography, Button } from '@mui/material';
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {  logoutUser } from '../../redux/auth/auth-operations';
export const AccountPopover = (props) => {
  const dispatch = useDispatch()
  const { onClose, open } = props;
  const handleClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Popover
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
      }}
      onClose={onClose}
      open={open}
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
          Іван Іваненко
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
