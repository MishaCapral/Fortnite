import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
  Container,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { goodsAPI } from "../../api/api";
import SearchField from "./search";

const GoodsList = ({ type }) => {
  const [items, setItems] = useState([]);
  //pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);

  useEffect(() => {
    const getTypedItems = async () => {
      const result = await goodsAPI.getTypeItems(type);
      setItems(...[result.data]);
    };
    if (type !== null) {
      setLoading(true);
      getTypedItems(type);
      setLoading(false);
    }
  }, []);

  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItemsPage = items.slice(firstItemsIndex, lastItemsIndex);
  //in pagination

  const totalItems = items.length;
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const paginate = (event, value) => setCurrentPage(value);

  // search
  const [searchValue, setSearchValue] = useState("");
  const searchOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  const fiteredItems = currentItemsPage.filter((itemSearch) => {
    //filteredItems
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
          //filteredItems
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
      <Pagination count={pageNumbers} defaultPage={1} onChange={paginate} />
    </Container>
  );
};

export default GoodsList;
