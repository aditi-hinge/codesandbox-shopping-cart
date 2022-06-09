// import { KeyboardArrowDown } from "@material-ui/icons";
import styled from "styled-components";
import "../styles.css";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
`;

const Category = styled.div`
  margin-right: 0.8em;
  position: relative;
  display: inline-block;
`;

const DropBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  /* border: none; */
  cursor: pointer;
`;
const DropContent = styled.div`
  /* display: none; */
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Option = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  color: black;
  font-weight: 400;
  width: 200px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e5e4e2;
  }
`;

export default function Filter() {
  return (
    <Container>
      <Left>
        <Category>
          <DropBtn class="filter-button">SORT BY</DropBtn>
          <DropContent class="drop-content">
            <Option href="#0">Recommended</Option>
            <Option href="#0">Newest</Option>
            <Option href="#0">Lowest Price</Option>
            <Option href="#0">Highest Price</Option>
          </DropContent>
        </Category>
        <Category>
          <DropBtn class="filter-button">SIZE</DropBtn>
          <DropContent class="drop-content">
            <Option href="#0">XS</Option>
            <Option href="#0">S</Option>
            <Option href="#0">M</Option>
            <Option href="#0">L</Option>
            <Option href="#0">XL</Option>
          </DropContent>
        </Category>
        <Category>
          <DropBtn class="filter-button">COLOR</DropBtn>
          <DropContent class="drop-content">
            <Option href="#0">Beige</Option>
            <Option href="#0">White</Option>
            <Option href="#0">Blue</Option>
            <Option href="#0">Green</Option>
            <Option href="#0">Brown</Option>
          </DropContent>
        </Category>
        <Category>
          <DropBtn class="filter-button">PATTERN</DropBtn>
          <DropContent class="drop-content">
            <Option href="#0">Checked</Option>
            <Option href="#0">Floral</Option>
            <Option href="#0">Patterned</Option>
            <Option href="#0">Solid Colored</Option>
            <Option href="#0">Striped</Option>
          </DropContent>
        </Category>
      </Left>
      <Right>
        <Category>303 Items</Category>
        <Category>MODEL</Category>
        <Category>PRODUCT</Category>
      </Right>
    </Container>
  );
}
