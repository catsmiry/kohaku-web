import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Home from './pages/Home';
import Blog from './pages/Blog';
import "./index.css";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </Router>
  );
};

export default App;