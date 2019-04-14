import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.jsx';
import Home from "./containers/Home/Home.jsx";
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/boards/:id" exact component={BoardView} /> */}
     </Switch>
    </Layout>
  );
};

export default Routes;