import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";

const Paginate = (props) => {
  const { pageNumbers, paginate } = props;

  return (
    <Box display="flex" justifyContent="center">
      <Pagination count={pageNumbers} defaultPage={1} onChange={paginate} />
    </Box>
  );
};

export default Paginate;
