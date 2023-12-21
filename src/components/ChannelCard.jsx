import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, mt }) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        boxSizing: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "356px",
          md: "320px",
        },
        height: "326px",
        margin: "auto",
        marginTop: mt,
      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
          }}>
          <CardMedia
            alt={channelDetail?.snippet?.title}
            image={`${demoProfilePicture}`}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscibers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
