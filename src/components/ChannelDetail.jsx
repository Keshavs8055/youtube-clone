import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchAPI } from "../utils/fetchApi";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setChannelVideos] = useState([]);
  useEffect(() => {
    FetchAPI(`channels?part="snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    FetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setChannelVideos(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundColor: "rgb(0,59,61)",
            background:
              "linear-gradient(131deg, rgba(0,59,61,1) 33%, rgba(192,0,255,1) 100%)",
            zIndex: 10,
            height: "200px",
          }}></div>
        <ChannelCard
          channelDetail={channelDetail}
          mt="-150px"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        p={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
