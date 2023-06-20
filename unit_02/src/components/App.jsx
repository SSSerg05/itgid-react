import { Header } from "./Header/Header/Header";
import { Main } from "./Main/Main/Main";
import { Sidebar } from "./Main/Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

import './App.css';

const site = {
	site_name : "react test",
	site_title : "my first site with react",
	nav : [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
}

export const App = () => {
  return (
    <div className="container">
      <Header data={site}></Header>
      <Main></Main>
      <Sidebar></Sidebar>
      <Footer data={site}></Footer>
    </div>
  );
};
