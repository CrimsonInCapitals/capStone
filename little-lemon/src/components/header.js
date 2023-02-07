
const Header = ({color, children}) =>{
    return (
      <header Style={'background-color:'+ color}>
            <nav>
                <picture>

                </picture>
                <menu>
                    {children}
                </menu>
            </nav>
      </header>
     );
  }

  export default Header;