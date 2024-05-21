// import { format } from 'date-fns';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export const OverviewLatestDisplays = ({ displays }) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title="Останні показаники" />
      <Box sx={{ width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Показник</TableCell>
              <TableCell>Спожито</TableCell>
              <TableCell sortDirection="desc">Дата</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displays.map(order => {
              const unixDate = Date.parse(order.createdDate);
              const date = new Date(unixDate);
              const createdDate =
                date.getHours() +
                ':' +
                date.getMinutes() +
                ':' +
                date.getSeconds() +
                ' ' +
                date.getDate() +
                '-' +
                date.getMonth() +
                '-' +
                date.getFullYear() +
                ' ';

              return (
                <TableRow hover key={order.id}>
                  <TableCell>{order.measurement}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{createdDate}</TableCell>
                  <TableCell>
                    {order.isSubmitted ? (
                      <div>
                        <p>Подано</p>
                      </div>
                    ) : (
                      <div>
                        <p>Не подано</p>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          Переглянути всі
        </Button>
      </CardActions>
    </Card>
  );
};
