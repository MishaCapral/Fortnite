import { Palette } from "@mui/icons-material";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { goodsAPI } from "../../../api/api";
import Paginate from "../paginationAndSearch/paginate";
import SearchField from "../paginationAndSearch/search";
import GoodsCard from "./goodsCard";

const GoodsList = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);

  const getTypedItems = useCallback(async () => {
    setLoading(true);
    const result = await goodsAPI.getTypeItems(type);
    setItems(...[result.data]);
    setLoading(false);
  }, [type]);

  useEffect(() => {
    if (type !== null) {
      getTypedItems(type);
    }
  }, [type]);

  // Pagination
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItemsPage = items.slice(firstItemsIndex, lastItemsIndex);

  const totalItems = items.length;
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const paginate = (event, value) => setCurrentPage(value);

  // Search
  const [searchValue, setSearchValue] = useState("");
  const searchOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  const fiteredItems = currentItemsPage.filter((itemSearch) => {
    return itemSearch.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  if (loading) {
    return (
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <CircularProgress size={50} />
        </Box>
      </Container>
    );
  } else {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "var(--main-yellow)", width: "fit-content" }}
          >
            All fortnite {type}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "var(--text-grey)", width: "fit-content" }}
          >
            found {totalItems} items
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "space-around",
            alignItems: "center",
            mb: "0.5rem",
            width: "100%",
          }}
        >
          <SearchField onChange={searchOnChange} />
          <Paginate pageNumbers={pageNumbers} paginate={paginate} />
        </Box>

        <GoodsCard fiteredItems={fiteredItems} />
      </Container>
    );
  }
};

export default GoodsList;
