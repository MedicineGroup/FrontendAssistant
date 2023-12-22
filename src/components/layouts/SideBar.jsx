/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import classes from "./SideBar.module.css";
import { ROUTES } from "../../utils/routes";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Appointments",
    path: ROUTES.APPOINTMENTS,
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
  },
  {
    name: "Consultations",
    path: ROUTES.CONSULTATIONS,
    icon: <InboxIcon className="h-5 w-5" />,
  },

];

export function SideBar() {
  return (
    <div className={classes.total}>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List>
          {navLinks.map((link) => {
            return (
              <NavLink to={link.path} key={link.name}>
                <ListItem>
                  <ListItemPrefix>{link.icon}</ListItemPrefix>
                  {link.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </Card>
    </div>
  );
}
export default SideBar;
