import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { goodsAPI } from "../../../api/api";
import ModalItem from "./ModalItem";

const GoodsCard = ({ fiteredItems }) => {
  // const [currentItem, setCurrentItems] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [itemId, setItemId] = useState([]);
  // const handleOpen = (id) => {
  //   setItemId(id);
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);

  // const getCurrentItem = useCallback(() => {
  //   const result = goodsAPI.getItem(itemId);
  //   setCurrentItems(...[result.data]);
  // }, [itemId]);

  // useEffect(() => {
  //   getCurrentItem(itemId);
  // }, [itemId]);
  //------------------------------------

  const [currentItem, setCurrentItems] = useState(null);
  const [open, setOpen] = useState(false);
  //const [itemId, setItemId] = useState([]);
  const handleOpen = (id) => {
    goodsAPI.getItem(id).then((response) => {
      setCurrentItems(response.data[0]);
      console.log(response);
      setOpen(true);
    });
  };

  const handleClose = () => setOpen(false);

  // const getCurrentItem = useCallback(() => {
  //   const result = goodsAPI.getItem(itemId);
  //   setCurrentItems(...[result.data]);
  // }, [itemId]);

  // useEffect(() => {
  //   getCurrentItem(itemId);
  // }, [itemId]);

  //console.log(itemId);
  return (
    <Grid container alignItems="stretch" sx={{ rowGap: "0.6rem" }}>
      <ModalItem
        handleClose={handleClose}
        open={open}
        currentItem={currentItem}
      />

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentItem ? currentItem.name : ""}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

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
                onClick={() => handleOpen(goods.id)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
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
                      color: "var(--text-grey)",
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
