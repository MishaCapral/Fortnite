import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./paginate.module.css";

const Paginate = (props) => {
  const { pageNumbers, paginate } = props;

  return (
    <Box className={styles.paginateBox}>
      <Pagination
        siblingCount={0}
        size={"small"}
        count={pageNumbers}
        defaultPage={1}
        onChange={paginate}
        className={styles.pagination}
      />
    </Box>
  );
};

export default Paginate;
