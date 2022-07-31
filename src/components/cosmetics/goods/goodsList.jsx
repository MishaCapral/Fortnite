import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { goodsAPI } from "../../../api/api";
import Paginate from "../paginationAndSearch/Paginate";
import SearchField from "../paginationAndSearch/Search";
import GoodsCard from "./GoodsCard";
import styles from "./goodsList.module.css";

const GoodsList = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const [searchValue, setSearchValue] = useState("");

  const getTypedItems = () => {
    setLoading(true);
    goodsAPI.getTypeItems(type).then((response) => {
      setItems(...[response.data]);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTypedItems(type);
  }, [type]);

  // Search
  const searchOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredItems = items.filter((itemSearch) => {
    return itemSearch.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  // Pagination
  const paginate = (event, value) => setCurrentPage(value);
  const totalItems = items.length;
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItemsPage = filteredItems.slice(firstItemsIndex, lastItemsIndex);

  if (loading) {
    return (
      <Container className={styles.loadingWrapper}>
        <Box>
          <CircularProgress size={50} />
        </Box>
      </Container>
    );
  } else {
    return (
      <Container>
        <Box className={styles.goodsWrapper}>
          <Typography variant="h5" className={styles.headerTitle}>
            All fortnite {type}
          </Typography>
          <Typography variant="subtitle1" className={styles.headerSubtitle}>
            found {totalItems} items
          </Typography>
        </Box>
        <Box
          className={styles.searchPaginateWrapper}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: {
              xs: "fit-content",
              sm: "100%",
            },
          }}
        >
          <SearchField onChange={searchOnChange} />
          <Paginate pageNumbers={pageNumbers} paginate={paginate} />
        </Box>

        <GoodsCard fiteredItems={currentItemsPage} />
      </Container>
    );
  }
};

export default GoodsList;
