const Navbar = () => {
    return ( 
        <>
        <nav className="navbar">
          <div className="logo">
             <img src="/img/45175a94d5389cc06b9d40c646878c60ac4bf7ed.png" alt="" />
          </div>
          
       
        <ul className="menuList">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>CONTACT</li>
          <li>ABOUT</li>
        </ul>
        <button className='btn '><a className='text-white' href="#">Login</a></button>
        </nav>
        </>
     );
}
 
export default Navbar;