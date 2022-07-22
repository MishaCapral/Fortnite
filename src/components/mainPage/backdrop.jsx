import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

export default function BackdropLoad() {
  const [showBackdrop, setShowBackdrop] = React.useState(false);

  const typeCategory = useSelector((state) => state.mainPage.typeCategory);

  const handleClose = () => {
    setShowBackdrop(false);
  };
  const handleToggle = () => {
    setShowBackdrop(!showBackdrop);
  };
  if (typeCategory === null) {
    handleToggle();
  }

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackdrop}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
