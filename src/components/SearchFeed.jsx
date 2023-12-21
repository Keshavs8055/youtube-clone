import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { FetchAPI } from "../utils/fetchApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${term}`).then((data) =>
      setVideos(data.items)
    );
  }, [term]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}>
        Results for <span style={{ color: "#f31503" }}>{term}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
