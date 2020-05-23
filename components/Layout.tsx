import Header from "./Header";
import Footer from "./Footer";

export default () => (
  <>
    <Header />
    {this.props.children}
    <Footer />
  </>
);
