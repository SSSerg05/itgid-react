

export const Nav = ({data}) => {
  return (
    <nav>
      <ul className = "main-navigation">
        { data.map(({link, text}) => <li key={link}><a href={link}>{text}</a></li>) }
      </ul>
    </nav>
  );
}