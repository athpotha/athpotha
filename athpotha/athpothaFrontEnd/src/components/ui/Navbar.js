function Navbar(props) {
  return (
    <header className="p-3 bg-dark text-white">
      {props.children}
    </header>
  );
}

export default Navbar;
