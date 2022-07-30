import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";

const Paginate = (props) => {
  const { pageNumbers, paginate } = props;

  return (
    <Box
      sx={{
        "&:hover": {
          borderColor: "var(--main-yellow)",
        },
        border: "1px solid rgb(108,108,108)",
        borderRadius: "4px",
        width: {
          xs: "auto",
          sm: "100%",
        },
        margin: "0.5rem",
      }}
    >
      <Pagination
        siblingCount={0}
        size={"small"}
        count={pageNumbers}
        defaultPage={1}
        onChange={paginate}
        sx={{
          color: "var(--text-grey)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "0.3rem",
        }}
      />
    </Box>
  );
};

export default Paginate;
