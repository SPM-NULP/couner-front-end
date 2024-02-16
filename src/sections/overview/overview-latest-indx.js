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
import { Scrollbar } from '../../components/scrollbar';

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Останні передані показаники" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Показник
                </TableCell>
                <TableCell>
                  Використано
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
              {orders.map((indx) => {
                const createdAt = format(indx.createdAt, 'dd/MM/yyyy');
                return (
                  <TableRow
                    hover
                    key={indx.id}
                  >
                    <TableCell>
                      {indx.indx}
                    </TableCell>
                    <TableCell>
                      {indx.used}
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
      </Scrollbar>
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
