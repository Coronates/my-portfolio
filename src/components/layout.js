import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Content, Drawer} from "react-mdl";

// Components
import Main from "./main";
import Footer from "./footer"
// Actions

// Style files
import "./layout.scss";

class PortfolioLayout extends Component {
  state = {};

  render() {
    let layoutRender = null;
    layoutRender = (
      <>
        <div className="demo-big-content">
          <Layout className="layout">
            <Header className="header-color" title="Andrés Coronado" scroll>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Me & My Projects</Link>
                <Link to="/contact">Contact Me</Link>
              </Navigation>
            </Header>
            <Drawer className="burguer" title="Andrés Coronado">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Me & My Projects</Link>
                <Link to="/contact">Contact Me</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
            <Footer />
          </Layout>
          
        </div>
      </>
    );

    return <>{layoutRender}</>;
  }
}

export default PortfolioLayout;
