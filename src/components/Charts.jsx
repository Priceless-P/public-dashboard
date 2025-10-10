import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  Typography,
  Box,
  FormControlLabel,
  Switch,
  Slider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { chartData } from "../utils/mock_data";

const Charts = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showusers, setShowusers] = useState(true);
  const [showworkers, setShowworkers] = useState(true);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Load chart data
  useEffect(() => {
    // TODO: Replace with API call when available
    //
    // Assumed API response format:
    // {
    //   "data": [
    //     {
    //       "date": "2025-10-09T08:00:00Z",
    //       "users": 42,
    //       "workers": 138
    //     },
    //     {
    //       "date": "2025-10-09T09:00:00Z",
    //       "users": 45,
    //       "workers": 142
    //     }
    //   ]
    // }

    // For now, using mock data
    setData(chartData.map((item) => ({ ...item, date: new Date(item.date) })));
  }, []);

  // Handle resize
  // Without this, the chart may not resize correctly when the window size changes
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDimensions({ width, height });
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  // Chart config
  const xAxis = [
    {
      dataKey: "date",
      scaleType: "time",
      valueFormatter: (date) =>
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      disableLine: true,
    },
  ];

  const yAxis = [
    {
      valueFormatter: (value) => `${value}`,
      disableLine: true,
    },
  ];

  const series = [
    ...(showusers
      ? [
          {
            dataKey: "users",
            showMark: false,
            color: theme.palette.primary.main,
            valueFormatter: (value) => `${value}`,
          },
        ]
      : []),
    ...(showworkers
      ? [
          {
            dataKey: "workers",
            showMark: false,
            color: theme.palette.text.secondary,
            valueFormatter: (value) => `${value}`,
          },
        ]
      : []),
  ];

  // Get visible data window (12 hours worth)
  const hoursToShow = 12;
  const maxScroll = Math.max(0, data.length - hoursToShow);

  // Initialize scroll position to show latest data
  useEffect(() => {
    if (data.length > 0 && scrollPosition === 0) {
      setScrollPosition(maxScroll);
    }
  }, [data.length, maxScroll, scrollPosition]);

  const startIndex = Math.floor(scrollPosition);
  const visibleData = data.slice(startIndex, startIndex + hoursToShow);

  return (
    <>
      <Card sx={theme.custom.charts.chartCard}>
        <Box
          sx={{
            padding: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "text.primary",
                textAlign: "center",
              }}
            >
              Users and Machines
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={theme.custom.charts.liveIndicator} />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: "0.7rem" }}
              >
                Live
              </Typography>
            </Box>
          </Box>

          {/* Toggle switches for chart series */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={showusers}
                  onChange={(e) => setShowusers(e.target.checked)}
                  size="small"
                  className="chart-primary"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                  Users
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={showworkers}
                  onChange={(e) => setShowworkers(e.target.checked)}
                  size="small"
                  className="chart-secondary"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                  Workers
                </Typography>
              }
            />
          </Box>
          <Box
            ref={containerRef}
            sx={{
              flexGrow: 1,
              width: "100%",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <LineChart
              dataset={visibleData}
              xAxis={xAxis}
              yAxis={yAxis}
              series={series}
              width={dimensions.width || 600}
              height={Math.max(dimensions.height - 40, 320)}
              margin={{ left: 5, right: 20, top: 20, bottom: 5 }}
              grid={{ vertical: false, horizontal: true }}
              slotProps={{
                legend: {
                  direction: "row",
                  position: { vertical: "top", horizontal: "right" },
                },
              }}
            />
          </Box>

          {/* Time Navigator */}
          <Box
            sx={{
              px: 2,
              pb: 2,
              width: "50%",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Slider
              variant="chart"
              value={scrollPosition}
              onChange={(_, newValue) => setScrollPosition(newValue)}
              min={0}
              max={maxScroll}
              step={1}
              marks={[{ value: maxScroll, label: "Now" }]}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Charts;
