interface Props{
  icon: string,
  title: string
}

function HeaderLeft({ icon, title }: Props) {
  return(
    <>
      <div className='header-left nowrap no-select'>
      {icon && (
        <button type='button' className='pointer'>
          <i className='material-icons'>{icon}</i>
        </button>
      )}
      <h1>{title}</h1>
    </div>
    </>
  );
}

export default HeaderLeft;
