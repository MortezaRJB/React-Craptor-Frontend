import { Link } from "react-router-dom";

interface Props{
  url: string,
  icon: string,
  title: string
}

function NavbarButton({ url, icon, title }: Props) {
  return(
    <>
      <Link
        to={url}
        className={location.pathname.toLowerCase().includes(url) ? 'active nowrap' : 'passive nowrap'}
      >
        <i className='material-icons'>{icon}</i>
        <span>{title}</span>
      </Link>
    </>
  );
}

export default NavbarButton;
