import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}>
      {categories.map((category) => (
        <button
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          key={category.name}>
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}>
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}>
            {category.name}
          </span>
        </button>
      ))}
      <Box
        pt={2}
        borderTop="1px solid #fc1503">
        <Typography
          textAlign="center"
          color="#fff">
          By Keshav Sharma
        </Typography>
      </Box>
    </Stack>
  );
};

export default Sidebar;
