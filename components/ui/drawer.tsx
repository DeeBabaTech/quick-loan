"use client";

import * as React from "react";
import { SwipeableDrawer } from "@mui/material";
import List from "@mui/material/List";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function DrawerNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navList = [
    {
      id: "/",
      nav: "Home",
    },
    {
      id: "about",
      nav: "About",
    },
    {
      id: "services",
      nav: "Services",
    },
    {
      id: "projects",
      nav: "Projects",
    },
    {
      id: "contact",
      nav: "Contact Us",
    },
  ];

  const DrawerList = (
    <div
      className='p-16 text-center h-screen bg-primary text-white'
      role='presentation'
      onClick={toggleDrawer(false)}>
      <List>
        {navList.map((text) => (
          <div key={text.id} className='my-10 text-center text-lg'>
            <Link href={text.id === "/" ? "/" : `#${text.id}`}>{text.nav}</Link>
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div className='md:hidden'>
      <MenuIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}>
        {DrawerList}
      </SwipeableDrawer>
    </div>
  );
}
