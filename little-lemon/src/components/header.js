const Header = ({color, children}) =>{
    return (
      <header Style={'background-color:'+ color}>
            <nav>
                <picture>
                    <svg src='../../img/logo-a.svg' alt='a little lemon'></svg>
                </picture>
                <menu>
                    {children}
                </menu>
            </nav>
      </header>
     );
  }

  export default Header;