import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// const measurement = [
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 1,
//     measurement: 13,
//   },
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 2,
//     measurement: 21,
//   },
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 3,
//     measurement: 30,
//   },
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 4,
//     measurement: 39,
//   },
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 5,
//     measurement: 45,
//   },
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 6,
//     measurement: 54,
//   },
//   {
//     createdDate: '2024-04-14T07:06:38.071Z',
//     id: 7,
//     measurement: 59,
//   },
// ];

const useChartOptions = () => {
  const theme = useTheme();
  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
      },
    },
    colors: [
      theme.palette.primary.main,
      alpha(theme.palette.primary.main, 0.5),
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 2,
      type: 'solid',
    },
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
      style: {
        fontSize: '14px',
        fontFamily: undefined,
      },
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: true,
      offsetY: 10,
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40px',
      },
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 2.5,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
      ],
      labels: {
        show: true,
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      labels: {
        formatter: value => (value > 0 ? `${value}` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

export const OverviewSales = props => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      <CardHeader
        action={
          <Button
            color="inherit"
            size="small"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowPathIcon />
              </SvgIcon>
            }
          >
            Оновити
          </Button>
        }
        title="Статистика споживання"
      />
      <CardContent>
        <Chart
          height={400}
          options={chartOptions}
          series={chartSeries}
          type="line"
          width="100%"
        />
      </CardContent>
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
        >
          Повний огляд
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewSales.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
