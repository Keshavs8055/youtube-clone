import { CheckCircle } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        // width: {
        //   md: "50%",
        //   xs: "100%",
        // },
        backgroundColor: "#131313",
        boxShadow: "none",
        borderRadius: "0",
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Box
          width="100%"
          m={0}
          height="240px"
          sx={{
            height: {
              xs: "220px",
              sm: "280px",
              md: "165px",
              lg: "290px",
            },
          }}
          backgroundColor="red">
          <img
            style={{
              objectFit: "cover",
              margin: 0,
              width: "100%",
              maxHeight: "100%",
            }}
            src={`${snippet?.thumbnails?.high?.url || demoThumbnailUrl}`}
            alt={`${snippet?.title}`}
          />
        </Box>
      </Link>
      <CardContent sx={{ backgroundColor: "#131313", height: "auto" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            {snippet?.title.length > 60 ? "..." : ""}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="gray">
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
