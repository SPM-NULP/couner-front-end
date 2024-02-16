import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from '../../sections/settings/settings-notifications';

export const Settings = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Налаштування
          </Typography>
          <SettingsNotifications />
        </Stack>
      </Container>
    </Box>
  </>
);