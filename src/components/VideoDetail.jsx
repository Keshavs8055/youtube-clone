import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FetchAPI } from "../utils/fetchApi";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideoData] = useState(null);
  const [relatedVideos, setVideos] = useState([]);

  useEffect(() => {
    FetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoData(data.items[0]);
    });
    FetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  if (!video?.snippet) return "Loading";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}>
            <ReactPlayer
              url={`https://www/youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6" }}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                gap={4}>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center">
          <Videos
            videos={relatedVideos}
            direction="column"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
