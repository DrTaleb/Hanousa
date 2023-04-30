import {useContext, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {
    Avatar, Badge,
    Box,
    Button,
    Divider, Fab,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
    Typography
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import authContext from "@/contexts/authContext";
import AuthContext from "@/contexts/authContext";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import SideBarItem from "@/components/SideBarItem";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Layout({children, data}) {
    console.log(data)
    const parentData = data.menus.filter(item => item.parent_id === 0 && item.type === "header")
    const subData = data.menus.filter(item => item.parent_id != 0 && item.type === "header")
    const footerParentData = data.menus.filter(item => item.parent_id === 0 && item.type === "footer")
    const footerSubData = data.menus.filter(item => item.parent_id != 0 && item.type === "footer")
    const toggleElement = useRef()
    const responsiveMenu = useRef()
    const menuClick = () => {
        toggleElement.current.classList.toggle("active");
        responsiveMenu.current.classList.toggle("active");
    }
    const {logOut, userData} = useContext(AuthContext)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <nav className="navbar-custom">
                <section className="main-nav">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <Link href={"/"}>
                            <img src={`https://storage.iran.liara.space/hanousa/static/${data.settings[0].image}`}
                                 alt="logo"/>
                        </Link>
                        <div className="nav-menu d-flex flex-row gap-4 mx-4">
                            {parentData.map(item =>
                                <div className="dropdown border-0 dropdown-custom" key={item.id}>
                                    <Link href={item.link} className="text-decoration-none text-white"
                                          aria-expanded="false">{item.title}</Link>
                                    {
                                        subData.filter(data => data.parent_id === item.id).length ?
                                            <div className={"dropdown-menu pt-4 bg-none shadow-none border-0"}>
                                                <ul className="dropdown-menu border-0">
                                                    {subData.filter(data => data.parent_id === item.id).map(subItem =>
                                                        <li key={subItem.id}>
                                                            <Link className="dropdown-item"
                                                                  href={subItem.link}>{subItem.title}</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div> : null
                                    }

                                </div>
                            )}
                        </div>
                    </div>
                    <div className="svg-header pe-md-5">

                        {userData.user_id ?
                            <>
                                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}
                                     className={"d-none d-md-block"}>
                                    <Tooltip title="منوی دسترسی">
                                        <Badge badgeContent={userData.name === null ? 1 : 0} color="error">
                                            <IconButton
                                                onClick={handleClick}
                                                size="small"
                                                sx={{ml: 2}}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                <Avatar sx={{width: 42, height: 42, color: "#fff"}}></Avatar>
                                            </IconButton>
                                        </Badge>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 2,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 54,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Badge badgeContent={userData.is_staff && "ادمین"} color="success">
                                                <Avatar sx={{width: 32, height: 32}}></Avatar>
                                            </Badge>
                                        </ListItemIcon>
                                        {userData.name}
                                    </MenuItem>
                                    <Divider/>
                                    {userData.is_staff &&
                                        <MenuItem onClick={handleClose}>
                                            <Link href={"/admin"}
                                                  className={"text-dark text-decoration-none d-flex flex-row align-items-center"}>
                                                <ListItemIcon>
                                                    <AdminPanelSettingsIcon color={"error"} fontSize="medium"/>
                                                </ListItemIcon>
                                                پنل ادمین
                                            </Link>
                                        </MenuItem>
                                    }
                                    <MenuItem onClick={handleClose}>
                                        <Link href={"/account-setting"} className={"text-dark text-decoration-none"}>
                                            <ListItemIcon>
                                                <Badge badgeContent={userData.name === null ? 1 : 0} color="error">
                                                    <Settings color={"error"} fontSize="small"/>
                                                </Badge>
                                            </ListItemIcon>
                                            تنظیمات اکانت
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={logOut}>
                                        <ListItemIcon>
                                            <Logout color={"error"} fontSize="small"/>
                                        </ListItemIcon>
                                        خروج از اکانت
                                    </MenuItem>
                                </Menu>
                            </>
                            :
                            <Link href={"/login"} className={"d-none d-md-block"}>
                                <Button variant={"contained"} color={"error"}>ورود / ثبت نام</Button>
                            </Link>
                        }
                    </div>
                </section>
            </nav>
            <div
                ref={toggleElement} onClick={menuClick} id={"menuIcon"}
                className="menu-icon d-md-none nav-item-style fixed-top- d-flex flex-column justify-content-center rounded">
                <MenuIcon className={"text-white"}></MenuIcon>
            </div>
            <nav className="navigation-menu col-lg-3 col-md-5 col-7 shadow d-md-none bg-white" id={"navigationMenu"}
                 ref={responsiveMenu}>
                <div className="col-12 layout has-sidebar fixed-sidebar fixed-header">
                    <aside id="sidebar" className="sidebar break-point-lg has-bg-image">
                        <div className="sidebar-layout">
                            <div className="sidebar-header">
                                <div className="d-flex flex-column align-items-end">
                                    {userData.user_id ?
                                        <>
                                            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}
                                                 className={"d-block d-md-none"}>
                                                <Tooltip title="منوی دسترسی">
                                                    <Badge badgeContent={userData.name === null ? 1 : 0} color="error">
                                                        <IconButton
                                                            onClick={handleClick}
                                                            size="small"
                                                            sx={{ml: 2}}
                                                            aria-controls={open ? 'account-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                        >
                                                            <Avatar
                                                                sx={{width: 42, height: 42, color: "#fff"}}></Avatar>
                                                        </IconButton>
                                                    </Badge>
                                                </Tooltip>
                                            </Box>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 2,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 54,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <Badge badgeContent={userData.is_staff && "ادمین"}
                                                               color="success">
                                                            <Avatar sx={{width: 32, height: 32}}></Avatar>
                                                        </Badge>
                                                    </ListItemIcon>
                                                    {userData.name}
                                                </MenuItem>
                                                <Divider/>
                                                {userData.is_staff &&
                                                    <MenuItem onClick={handleClose}>
                                                        <Link href={"/admin"}
                                                              className={"text-dark text-decoration-none d-flex flex-row align-items-center"}>
                                                            <ListItemIcon>
                                                                <AdminPanelSettingsIcon color={"error"}
                                                                                        fontSize="medium"/>
                                                            </ListItemIcon>
                                                            پنل ادمین
                                                        </Link>
                                                    </MenuItem>
                                                }
                                                <MenuItem onClick={handleClose}>
                                                    <Link href={"/account-setting"}
                                                          className={"text-dark text-decoration-none"}>
                                                        <ListItemIcon>
                                                            <Badge badgeContent={userData.name === null ? 1 : 0}
                                                                   color="error">
                                                                <Settings color={"error"} fontSize="small"/>
                                                            </Badge>
                                                        </ListItemIcon>
                                                        تنظیمات اکانت
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem onClick={logOut}>
                                                    <ListItemIcon>
                                                        <Logout color={"error"} fontSize="small"/>
                                                    </ListItemIcon>
                                                    خروج از اکانت
                                                </MenuItem>
                                            </Menu>
                                        </>
                                        :
                                        <Link href={"/login"} className={"ms-3 d-block d-md-none"}>
                                            <Button variant={"contained"} color={"error"}>ورود / ثبت نام</Button>
                                        </Link>
                                    }
                                </div>
                            </div>
                            <div className="sidebar-content">
                                <nav className="menu open-current-submenu">
                                    <ul className="side-ul">
                                        {parentData.map((item) =>
                                            <SideBarItem key={item.id} menuID={item.id} menuTitle={item.title}
                                                         menuLink={item.link}
                                                         subMenus={subData}></SideBarItem>
                                        )}
                                        {/*{categoryItems.map((item) =>*/}
                                        {/*    <SideBarItem key={item.ID} menuID={item.ID} menuTitle={item.title}*/}
                                        {/*                 menuLink={item.link}*/}
                                        {/*                 subMenus={subCategoryItems}></SideBarItem>*/}
                                        {/*)}*/}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </nav>

            {children}
            <footer className="footer position-relative">
                <div className="container top-footer">
                    <div className="row pt-3">
                        <div className="col-12 offset-md-0 col-md-4 mt-4 mt-md-0">
                            <ul className="footer-social">
                                <li className={"d-flex flex-sm-row flex-column align-items-sm-center"}>
                                    <Link href={"/contactus"}>
                                        <LocationOnIcon color={"warning"}></LocationOnIcon>
                                    </Link>
                                    <p className={"text-white mt-4"}>{data.settings[0].address}</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 offset-md-0 col-md-4 mt-4 mt-md-0">
                            <ul className="footer-social">
                                <li>
                                    <Link href={`tel:${data.settings[0].number}`} className="call-img">
                                        <img src="/img/phone-call-1.webp" alt="contact"/>
                                    </Link>
                                    <p className={"text-white mt-4"}>{data.settings[0].number}</p>
                                </li>
                            </ul>
                        </div>


                        <div className="col-12 offset-3 offset-md-0 col-md-4">
                            <img className="img-logo"
                                 src={`https://storage.iran.liara.space/hanousa/static/${data.settings[0].image}`}
                                 alt="logo"/>
                        </div>

                    </div>
                </div>
                <img
                    className="position-absolute arrow-left"
                    src="/img/arrow-2-1.png"
                    alt="arrow"
                />
                <div className="container p-3 pt-4 middle-footer">
                    <div className="row">
                        {
                            footerParentData.map(item =>
                                <div className="col-12 col-md-6 col-lg-4 services" key={item.id}>
                                    <h3>{item.title}</h3>
                                    <div className="line-services"></div>
                                    <div className="services-item">

                                        {
                                            footerSubData.filter(data => data.parent_id === item.id).length ?
                                                <ul>
                                                    {footerSubData.filter(data => data.parent_id === item.id).map(subItem =>
                                                        <li key={subItem.id}>
                                                            <Link className="dropdown-item"
                                                                  href={subItem.link}>{subItem.title}</Link>
                                                        </li>
                                                    )}
                                                </ul> : null
                                        }

                                    </div>
                                </div>
                            )
                        }

                        <div className="col-12 col-md-6 col-lg-3 pb-5">
                            <div className="iframe-map">
                                {/*<iframe*/}
                                {/*    scrolling="no"*/}
                                {/*    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"*/}
                                {/*>*/}
                                {/*</iframe>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="/img/arrow-3.png"
                    className="d-none d-lg-block arrow-right"
                    alt="arrow"
                />
            </footer>
            <div className="copyright">
                <div className="copy-text">
                    <p>تمامی حقوق این وبسایت متلق به {data.settings[0].name} میباشد &copy;</p>
                </div>
                <div className="sub-footer">
                    <a href="#">حریم خصوصی</a>
                    <a href="#">کوکی ها</a>
                </div>
            </div>
        </>
    )
}