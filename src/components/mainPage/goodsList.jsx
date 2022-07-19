import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";

const GoodsList = (props) => {
  let items = props.items;
  window.items = items;

  return items.map((goods, index) => (
    <Grid container alignItems="stretch" key={index}>
      {goods.map((item, index) => {
        if (item.type.value === "backpack") {
          return (
            <Grid item xs={12} md={2} key={index}>
              <Card key={item.id} sx={{ maxWidth: "100%", margin: "1rem" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.images.smallIcon}
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="p">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                      {item.description}
                    </Typography>
                  </CardContent>
                  {/* <p>{item.name}</p>
              <p>{item.description}</p>
              <br></br> */}
                </CardActionArea>
              </Card>
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  ));
};

export default GoodsList;
