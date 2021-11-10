import React, {useRef} from 'react';
import "../../hooks/useNavigation"
import useNavigation from '../../hooks/useNavigation';
import {gql, useQuery} from "@apollo/client"
import Error from "./../Error"
import Loader from "./../Loader"
import TopMenu from "./../TopMenu"
import SideMenu from "./../SideMenu"
import "./style.scss"

const GET_ROCKETS_NAMES = gql`
{
  rockets(offset: 1) {
    name
    id
  }
}
`

const NavBar = () => {
    const navRef = useRef(null);
    const {
        isMobileView,
        isMenuOpen,
        setIsMenuOpen,
    } = useNavigation(navRef)
    const {data, loading, error}= useQuery(GET_ROCKETS_NAMES)
    if (loading) return <Loader />
    if (error) return <Error error={error} />
    

    return (
    <div className="container-fluid" ref={navRef}>
        <div className="row">
            <TopMenu rockets={data.rockets} isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} isMobileView={isMobileView}/>
            <SideMenu rockets={data.rockets} isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} isMobileView={isMobileView}/>
        </div>
    </div>
    )
};

export default NavBar;
