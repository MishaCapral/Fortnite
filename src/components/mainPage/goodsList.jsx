import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
  Container,
} from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { goodsAPI } from "../../api/api";
import Paginate from "./paginate";
import SearchField from "./search";

const GoodsList = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);

  const getTypedItems = useCallback(async () => {
    const result = await goodsAPI.getTypeItems(type);
    setItems(...[result.data]);
  }, []);

  useEffect(() => {
    if (type !== null) {
      setLoading(true);
      getTypedItems(type);
      setLoading(false);
    }
  }, []);

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
          mt: "1rem",
        }}
      >
        <h1>Loading...</h1>
      </Container>
    );
  }
  return (
    <Container
      sx={{
        mt: "1rem",
      }}
    >
      <SearchField onChange={searchOnChange} />
      <Grid container alignItems="stretch">
        {fiteredItems.map((goods, index) => {
          return (
            <Grid item xs={12} md={2} key={goods.id}>
              <Card sx={{ maxWidth: "100%", margin: "1rem" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={goods.images.smallIcon}
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="p">
                      {goods.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                      {goods.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Paginate pageNumbers={pageNumbers} paginate={paginate} />
    </Container>
  );
};

export default GoodsList;
