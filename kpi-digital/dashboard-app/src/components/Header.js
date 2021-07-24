import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu, Button, Anchor } from 'antd';
import AuthService from "../Api/AuthService";

const currentUser = AuthService.getCurrentUser();
const currentUserCanAddGraphs = AuthService.userCanConfigureGraphToSelf();

const Header = ({ location, history }) => {
  const handleLogout = () => {
    AuthService.logout();
    window.location.reload();
  };
  return (
    <Layout.Header
      style={{
        padding: '0 32px',
      }}
    >
      <div
        style={{
          float: 'left',
        }}
      >
        <h2
          style={{
            color: '#fff',
            margin: 0,
            marginRight: '1em',
            display: 'inline',
            width: 100,
            lineHeight: '54px',
          }}
        >
          My Dashboard
        </h2>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        style={{
          lineHeight: '64px',
        }}
      >

        {(currentUser && currentUserCanAddGraphs) ?
          <Menu.Item key="/explore">
            <Link to="/explore">Explore</Link>
          </Menu.Item>
          :
          null
        }

        {(currentUser) ?
          <Menu.Item key="/">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          :
          null
        }

        {currentUser ?
          <Menu.Item>
            <Button onClick={handleLogout}>Logout</Button>
          </Menu.Item>
          :
          null
        }

      </Menu>
    </Layout.Header>
  )
};

export default withRouter(Header);
