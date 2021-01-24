import './App.css';
import Header from './containers/header';
import Sidebar from './containers/sidebar';
import Banner from './containers/banner';
import ContentBox from './containers/contentBox';
import People from './containers/people';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Banner />
      <ContentBox />
      <People />
    </div>
  );
}

export default App;
