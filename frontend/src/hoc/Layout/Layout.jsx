import React from 'react';
import Header from '../../components/Header/Header.jsx';
import './Layout.scss'
const Layout = props => {
  return (
    <div className="Layout">
      <Header />
      {props.children}
      Boards:
    </div>
  );
};
export default Layout;