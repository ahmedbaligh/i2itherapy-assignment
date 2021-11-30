import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Signup, Dashboard, Login, PrivateRoute } from './components';

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="" element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
