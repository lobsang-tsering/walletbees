import React from 'react';
//Stateless Functional Component
const NavBar = ({totalCounters})=> {
   //const {totalCounters} = props.totalCounters;
    return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="walletbees.in">Navbar
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </nav>
     );
}
 
export default NavBar;
// class NavBar extends Component {
//     render() { 
        
//     }
// }
 
// export default NavBar;