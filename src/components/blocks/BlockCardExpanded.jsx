import { Box, Stack, Typography, Divider, useTheme } from "@mui/material";
import TransactionInfo from "./TransactionInfo";
import MinerInfo from "./MinerInfo";

const BlockCardExpanded = ({ block }) => {
  const theme = useTheme();

  const getPendingAnimation = (blockId) => ({
    ...theme.custom.block.pendingAnimation,
    animationDelay: `${blockId * 0.5}s`,
  });

  return (
    <Stack spacing={0.5} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="blockTitle"
          sx={block.isPending ? getPendingAnimation(block.id) : {}}
        >
          {block.blockHeight.toLocaleString()}
        </Typography>
        <Typography variant="blockTime">
          {block.isPending ? "Pending" : block.timeAgo}
        </Typography>
      </Box>

      <Divider
        sx={{ borderColor: theme.custom.block.dividerColor, width: "100%" }}
      />

      <TransactionInfo block={block} />

      <Divider
        sx={{ borderColor: theme.custom.block.dividerColor, width: "100%" }}
      />

      <MinerInfo block={block} />
    </Stack>
  );
};

export default BlockCardExpanded;
