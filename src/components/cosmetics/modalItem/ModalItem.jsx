import { Button, Modal, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./modalItem.module.css";
import moment from "moment";

const ModalItem = ({ handleClose, open, currentItem }) => {
  const addedDate = (dateStr) => {
    if (dateStr) {
      const time = moment.utc(dateStr).format("MMM Do, YYYY");
      return `Release date: ${time}`;
    } else {
      return "";
    }
  };
  const lastSeen = (dateStr) => {
    if (dateStr) {
      const time = moment.utc(dateStr).format("MMM Do, YYYY");
      const timeAgo = moment.utc(dateStr).startOf("day").fromNow();
      return `Last seen: ${time} (${timeAgo})`;
    } else {
      return "";
    }
  };
  const mediumViewport = useMediaQuery("(min-width:900px)");
  let imgPath = mediumViewport
    ? currentItem?.images.icon
    : currentItem?.images.smallIcon;

  return (
    <Modal open={open} onClose={handleClose} className={styles.modalWrapper}>
      <Box>
        <Box
          className={styles.wrapper}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box>{imgPath && <img src={imgPath} alt="img" />}</Box>
          <Box className={styles.wrapperText}>
            <Button
              onClick={handleClose}
              size="large"
              className={styles.closeBtn}
            >
              X
            </Button>
            <Typography variant="h4" component="h2" className={styles.white}>
              {currentItem?.name}
            </Typography>
            <Typography variant="subtitle1" className={styles.yellow}>
              {currentItem?.description}
            </Typography>
            <Typography variant="body2" className={styles.grey}>
              {currentItem?.introduction?.text}
            </Typography>
            <Typography variant="body2" className={styles.grey}>
              {addedDate(currentItem?.added)}
            </Typography>
            <Typography variant="body2" className={styles.grey}>
              {lastSeen(
                currentItem?.shopHistory &&
                  currentItem?.shopHistory[currentItem.shopHistory.length - 1]
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
export default ModalItem;
