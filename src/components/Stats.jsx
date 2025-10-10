import React from "react";
import {
  Speed,
  TrendingUp,
  AccessTime,
  ViewQuilt,
  AttachMoney,
} from "@mui/icons-material";
import { stats } from "../utils/mock_data";
import Card from "./Card";

const Stats = () => {
  const statCards = [
    {
      icon: Speed,
      iconColor: "primary",
      title: "Pool Total Hashrate",
      value: stats.poolTotalHashrate,
      gridColumn: {
        xs: "span 7",
        sm: "span 7",
        md: "span 3",
        lg: "span 3",
      },
    },
    {
      icon: TrendingUp,
      iconColor: "success",
      title: "Pool Uptime",
      value: stats.poolUptime,
      gridColumn: {
        xs: "span 8",
        sm: "span 8",
        md: "span 3",
        lg: "span 3",
      },
    },
    {
      icon: AccessTime,
      iconColor: "info",
      title: "Avg Block Time",
      value: stats.avgBlockTime,
      gridColumn: {
        xs: "span 15",
        sm: "span 15",
        md: "span 3",
        lg: "span 3",
      },
    },
    {
      icon: ViewQuilt,
      iconColor: "warning",
      title: "Last Block Found",
      value: stats.lastBlockFound,
      gridColumn: {
        xs: "span 7",
        sm: "span 7",
        md: "span 3",
        lg: "span 3",
      },
    },
    {
      icon: AttachMoney,
      iconColor: "success",
      title: "Bitcoin Price",
      value: stats.bitcoinPrice,
      gridColumn: {
        xs: "span 8",
        sm: "span 8",
        md: "span 3",
        lg: "span 3",
      },
    },
  ];

  return (
    <>
      {statCards.map((card, index) => (
        <Card
          key={index}
          variant="stat"
          icon={card.icon}
          iconColor={card.iconColor}
          title={card.title}
          value={card.value}
          gridColumn={card.gridColumn}
        />
      ))}
    </>
  );
};

export default Stats;
