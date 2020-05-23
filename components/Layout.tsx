import Header from "./Header";
import Footer from "./Footer";

export default (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
