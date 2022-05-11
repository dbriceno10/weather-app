import SearchBar from "../SearchBar/SearchBar"
const Navbar = ({onSearch, children}: {onSearch: Function, children: JSX.Element}) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch}/>
      {children}
    </nav>
  );
}

export default Navbar;
