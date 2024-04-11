import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

interface Props{
  icon: string,
  title: string
}

function Header({ icon, title }: Props) {
  return(
    <>
      <header className='flex flex-center flex-space-between'>
      <HeaderLeft icon={icon} title={title} />
      <HeaderRight />
    </header>
    </>
  );
}

export default Header;
