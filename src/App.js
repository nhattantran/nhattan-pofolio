import './App.css';
import HomepageLayout from './layout/Homepage.js';
import PageRouter from './router.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const extractRouter = (Layout, route) => (
    route.map((item, index) => {
      const Component = item.component;
      return (
        <Route
          key={index}
          path={item.path}
          exact
          element = {
            <Layout children={<Component />}/>
          }
        />
      )
    }
    )
  )
  return (
    <Router>
      <Routes>
        {extractRouter(HomepageLayout, PageRouter)}
      </Routes>
    </Router>
  );
}

export default App;
