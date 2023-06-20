import { Nav } from "../Nav/Nav";
import css from './Header.module.css'

export const Header = ({data}) => {
  const {site_name, site_title, nav} = data;
  
  return (
    <header className={css.header}>
      <h1>{site_name}</h1>
      <h2>{site_title}</h2>
      {/* cюда импортируется cюда импортируется компонент nav */}
      <Nav data = {nav}></Nav>
    </header>
  )
}