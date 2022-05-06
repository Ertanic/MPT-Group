import React from "react";
import { concatClasses } from "../../Contexts/DeviceContext";

const resizeHandler = () => {
    const navmenu = document.getElementsByClassName('navmenu_window')[0];
    const body = document.getElementsByTagName('body')[0];
    if (navmenu.classList.contains('opened')) {
        navmenu.classList.toggle('opened');
    }
    if (body.classList.contains('fix')) {
        body.classList.toggle('fix');
    }
}
const resizeDetection = () => window.addEventListener('resize', resizeHandler)
const noResizeDetection = () => window.removeEventListener('resize', resizeHandler)

export default function Navmenu({children, adaptive}) {
    const openingMenuHandler = () => {
        const menu = document.getElementsByClassName('navmenu_window')[0]
        menu.classList.toggle('opened');

        document.getElementsByTagName('body')[0].classList.toggle('fix')
    }

    React.useEffect(() => {
        resizeDetection()
    
        return () => {
            noResizeDetection()
        }
    }, [])
    

    return (
        <div className="mobile-header__wrapper">
            <div onClick={openingMenuHandler} className={concatClasses("open_button", adaptive.device, adaptive.classes)}>Навигация</div>
            <div className="navmenu_window">
                <div onClick={openingMenuHandler} className={concatClasses("close_button", adaptive.device, adaptive.classes)}>Назад</div>
                <div className="navpoints_list">{children}</div>
                <div className="navmenu_footer">© 2022 МПТ им. Плеханова</div>
            </div>
        </div>
    )
}