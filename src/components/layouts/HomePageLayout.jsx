/* eslint-disable react/prop-types */
// Home.js
import classes from "./HomePageLayout.module.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { ComplexNavbar } from "./HomeHeader";
const HomePageLayout = () => {
  return (
    <>
    <ComplexNavbar/>
    <div className={classes.Home}>
      <SideBar />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default HomePageLayout;
