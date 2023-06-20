import { Nav } from "../Header/Nav/Nav";
import css from './Footer.module.css'

export const Footer = ({data}) => {
  const {site_name, nav} = data;
  return (
    <footer className={css.footer}>
	    <h3>{site_name}</h3>
	    {/* сюда импортируем компонент nav */}
      <Nav data = {nav}></Nav>
    </footer>
  )
}