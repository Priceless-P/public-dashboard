import { Stack, Typography, useTheme } from "@mui/material";

const BlockCardCollapsed = ({ block }) => {
  const theme = useTheme();

  const getPendingAnimation = (blockId) => ({
    ...theme.custom.block.pendingAnimation,
    animationDelay: `${blockId * 0.5}s`,
  });

  return (
    <Stack spacing={0.3} sx={{ width: "100%" }}>
      <Typography
        variant="blockTitle"
        sx={block.isPending ? getPendingAnimation(block.id) : {}}
      >
        {block.blockHeight.toLocaleString()}
      </Typography>
      <Typography variant="blockTime">
        {block.isPending ? "Pending" : block.timeAgo}
      </Typography>
      {!block.isPending && (
        <Typography variant="blockMiner">{block.miner}</Typography>
      )}
    </Stack>
  );
};

export default BlockCardCollapsed;
