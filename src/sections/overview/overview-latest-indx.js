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
  TableRow
} from '@mui/material';

export const OverviewLatestDisplays = ({displays}) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title="Останні показаники" />
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
              {displays.map((order) => {
                // const createdAt = format(order.createdDate, 'dd/MM/yyyy');
                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.displayCount}
                    </TableCell>
                    {/* <TableCell>
                      {createdAt}
                    </TableCell> */}
                    <TableCell>
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
