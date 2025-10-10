import { Box, Typography, useTheme } from "@mui/material";
import {
  Description as DescriptionIcon,
  Receipt as ReceiptIcon,
} from "@mui/icons-material";
import { formatSatsPerVbyte } from "../../utils/mock_data";

const TransactionInfo = ({ block }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        width: "100%",
        minHeight: 30,
      }}
    >
      {block.isPending ? (
        <DescriptionIcon
          sx={{
            fontSize: theme.custom.block.iconSize,
            color: "rgba(255,255,255,0.8)",
          }}
        />
      ) : (
        <ReceiptIcon
          sx={{
            fontSize: theme.custom.block.iconSize,
            color: "rgba(255,255,255,0.8)",
          }}
        />
      )}
      <Typography variant="blockCaption">
        {block.isPending
          ? "Template in progress"
          : `${block.transactionCount.toLocaleString()} txs`}
      </Typography>
      <Typography variant="blockCaption">
        {block.isPending ? "⚡" : "₿"}
      </Typography>
      <Typography variant="blockCaption">
        {block.isPending
          ? "In progress"
          : `~${formatSatsPerVbyte(block.satsPerVbyte)}`}
      </Typography>
    </Box>
  );
};

export default TransactionInfo;
