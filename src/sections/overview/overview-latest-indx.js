import { format } from 'date-fns';
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
  TableRow
} from '@mui/material';
// import { Scrollbar } from '../../components/scrollbar';

export const OverviewLatestOrders = (props) => {
  const { orders = []} = props;

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title="Останні передані показаники" />
      {/* <Scrollbar sx={{ flexGrow: 1}}> */}
        <Box sx={{ width: '100%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Показник
                </TableCell>
                <TableCell>
                  Спожито 
                </TableCell>
                <TableCell sortDirection="desc">
                  Дата
                </TableCell>
                <TableCell>
                  Статус
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const createdAt = format(order.createdAt, 'dd/MM/yyyy');
                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.indx}
                    </TableCell>
                    <TableCell>
                      {order.used}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      {/* </Scrollbar> */}
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          Переглянути всі
        </Button>
      </CardActions>
    </Card>
  );
};
