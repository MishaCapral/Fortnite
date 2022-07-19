import React from "react";
import { connect } from "react-redux";
import GoodsList from "./goodsList";
import { getItems } from "./mainPageReducer";
import { Container } from "@mui/material";

class goodsListAPIComponent extends React.Component {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.getItems();
    }
  }
  // this.props.getItems();

  render() {
    return (
      <Container
        sx={{
          mt: "1rem",
        }}
      >
        <GoodsList items={this.props.items} />
      </Container>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    items: state.mainPage.items,
  };
};

export default connect(mapStateToProps, { getItems })(goodsListAPIComponent);
