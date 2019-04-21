import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.jsx';
import Home from "./containers/Home/Home.jsx";
import BoardView from './containers/BoardView/BoardView.jsx';
import Error404 from './components/Error404/Error404.jsx';
import Login from './components/User/Login.jsx'
import Register from './components/User/Register.jsx'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/boards/:id" exact component={BoardView} />
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="*"  component={Error404}/>
     </Switch>
    </Layout>
  );
};

export default Routes;