import {Fragment, useState} from "react";
import Link from "next/link";

export default function SideBarItem({menuID,menuTitle, menuLink, subMenus}){
    const [myHideClass , setHideClass] = useState("sub-hide")
    function subMenuHandler(event){
        const element = event.target.classList[1]
        if(element === "main-menu-title") {
            myHideClass==="sub-hide" ? setHideClass("") : setHideClass("sub-hide")
        }
    }
    const relatedSubMenus = subMenus.filter(item => item.parent_id === menuID)
    return(
        <Fragment>
            <li onClick={subMenuHandler} className={`menu-item sub-menu cursor-pointer ${relatedSubMenus.length && "active"}`}>
                <Link href={menuLink} className={"text-decoration-none text-dark"}>
                    <span className="menu-title main-menu-title">{menuTitle}</span>
                </Link>
                <div className={`side-bar-sub-menu ${myHideClass}`}>
                    <ul className="sub-ul">
                        {relatedSubMenus.map((item)=>
                            <li key={item.id} className="menu-item">
                                <Link href={item.link} className={"text-decoration-none text-dark border-start border-3 ms-4"}>
                                    <span className="menu-title">{item.title}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

            </li>
        </Fragment>
    )
}