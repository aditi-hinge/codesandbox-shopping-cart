import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import OneProduct from "../components/OneProduct";

const Container = styled.div``;

export default function SingleProduct() {
  return (
    <Container>
      <h1>
        <Announcements />
        <Navbar />
        <OneProduct />
        <Newsletter />
        <Footer />
      </h1>
    </Container>
  );
}
