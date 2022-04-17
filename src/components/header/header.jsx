import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <Link to={AppRoute.MAIN} className={`main__header-lnk ${pathname === AppRoute.MAIN && 'lnk-active'}`}>События</Link>
                    <Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${pathname === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
                </div>
            </section>
        </section>
    )
};

export default Header;