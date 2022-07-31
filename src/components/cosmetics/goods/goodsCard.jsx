import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { goodsAPI } from "../../../api/api";
import ModalItem from "../modalItem/ModalItem";
import styles from "./goodsCard.module.css";

const GoodsCard = ({ fiteredItems }) => {
  //logic modal window
  const [currentItem, setCurrentItems] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    goodsAPI.getItem(id).then((response) => {
      setCurrentItems(response.data[0]);
      setOpen(true);
    });
  };
  const handleClose = () => setOpen(false);

  return (
    <Grid container alignItems="stretch" className={styles.grid}>
      <ModalItem
        handleClose={handleClose}
        open={open}
        currentItem={currentItem}
      />
      {fiteredItems.map((goods, index) => {
        return (
          <Grid item xs={4} sm={3} md={2} key={goods.id}>
            <Card className={styles.card}>
              <CardActionArea
                onClick={() => handleOpen(goods.id)}
                className={styles.cardActionArea}
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
                    className={styles.cardContent}
                    sx={{
                      fontSize: {
                        xs: "0.8em",
                        sm: "1em",
                        md: "1.2em",
                      },
                    }}
                  >
                    {goods.name}
                  </Typography>
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
