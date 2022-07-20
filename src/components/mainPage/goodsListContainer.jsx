import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoodsList from "./goodsList";
import { getTypeItems } from "./mainPageReducer";
import { Container } from "@mui/material";

const GoodsListAPIComponent = ({ type }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.mainPage.items);
  // const typeItems = useSelector((state) => state.mainPage.typeItems);
  // useEffect(() => {
  //   const allItems = getAllItems();
  //   allItems(dispatch);
  // }, []);

  useEffect(() => {
    const typeItems = getTypeItems(type);
    typeItems(dispatch);
  }, [type]);
  return (
    <Container
      sx={{
        mt: "1rem",
      }}
    >
      <GoodsList items={items} />
    </Container>
  );
};

// class GoodsListAPIComponent extends React.Component {
//   componentDidMount() {
//     if (this.props.items.length === 0) {
//       this.props.getTypeItems(this.props.typeItems);
//     }
//   }
//   // this.props.getItems();

//   render() {
//     return (
//       <Container
//         sx={{
//           mt: "1rem",
//         }}
//       >
//         <GoodsList items={this.props.items} />
//       </Container>
//     );
//   }
// }

// let mapStateToProps = (state) => {
//   return {
//     items: state.mainPage.items,
//     typeItems: state.mainPage.typeItems,
//   };
// };

// export default connect(mapStateToProps, { getAllItems, getTypeItems })(
//   GoodsListAPIComponent
// );

export default GoodsListAPIComponent;
