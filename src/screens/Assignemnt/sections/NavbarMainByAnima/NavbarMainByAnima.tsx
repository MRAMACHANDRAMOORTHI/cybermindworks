import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavbarMainByAnima = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Find Jobs", href: "#" },
    { label: "Find Talents", href: "#" },
    { label: "About us", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between h-20 px-6 bg-white rounded-[122px] border border-solid border-[#fcfcfc] shadow-[0px_0px_20px_#7f7f7f26] my-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-10 h-[45px] bg-[url(/clip-path-group.png)] bg-[100%_100%] shrink-0" />

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-2">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className="inline-flex items-center justify-center px-4 lg:px-6 py-2 rounded-[10px] font-bold text-dark-black text-sm lg:text-base hover:bg-gray-100 transition-colors whitespace-nowrap"
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Create Jobs Button */}
          <Button className="rounded-[30px] px-4 lg:px-6 py-2 font-bold text-white text-sm lg:text-base bg-gradient-to-b from-[#a128ff] to-[#6100ad] hover:opacity-90 transition-opacity whitespace-nowrap">
            Create Jobs
          </Button>
        </nav>
      </div>
    </header>
  );
};
