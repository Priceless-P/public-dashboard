import { Box, Typography, Avatar, useTheme } from "@mui/material";
import { getMinerColor } from "../../utils/mock_data";

const MinerInfo = ({ block }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: block.isPending ? "flex-end" : "flex-start",
        mt: 0.5,
      }}
    >
      {!block.isPending && (
        <>
          <Avatar
            sx={{
              width: theme.custom.block.avatarSize,
              height: theme.custom.block.avatarSize,
              bgcolor: getMinerColor(block.miner),
              fontSize: theme.custom.block.avatarFontSize,
              mr: 0.5,
            }}
          >
            {block.miner.substring(0, 2).toUpperCase()}
          </Avatar>
          <Typography variant="blockMiner">{block.miner}</Typography>
        </>
      )}
    </Box>
  );
};

export default MinerInfo;
