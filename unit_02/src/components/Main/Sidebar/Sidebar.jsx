import css from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <ul className={css.sidebar}>
      <li>Страница 1</li>
      <li>Страница 2</li>
      <li>Страница 3</li>
    </ul>
  )
}