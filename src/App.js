import "./App.css";
import Header from "./containers/header";
import Sidebar from "./containers/sidebar";
import Banner from "./containers/banner";
import ContentBox from "./containers/contentBox";
import Testimonials from "./containers/testimonials";
import People from "./containers/people";
import Partners from "./containers/partners";
import Contact from "./containers/contact";
import Footer from "./containers/footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Banner />
      <ContentBox />
      <Testimonials />
      <People />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
