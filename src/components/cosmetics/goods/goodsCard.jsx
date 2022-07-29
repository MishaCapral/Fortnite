import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const GoodsCard = ({ fiteredItems }) => {
  return (
    <Grid container alignItems="stretch" sx={{ rowGap: "0.6rem" }}>
      {fiteredItems.map((goods, index) => {
        return (
          <Grid item xs={4} sm={3} md={2} key={goods.id}>
            <Card
              sx={{
                height: "100%",
                maxWidth: "100%",
                margin: "0.3rem",
              }}
            >
              <CardActionArea
                sx={{
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={goods.images.smallIcon}
                  alt="img"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    component="p"
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        xs: "0.8em",
                        sm: "1em",
                        md: "1.2em",
                      },
                    }}
                  >
                    {goods.name}
                  </Typography>
                  {/* <Typography
                gutterBottom
                component="p"
                sx={{
                  fontSize: {
                    xs: "0.6em",
                    sm: "0.8em",
                    md: "1em",
                  },
                }}
              >
                {goods.description}
              </Typography> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default GoodsCard;
