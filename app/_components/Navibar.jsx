"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";
import { useState } from "react";
import DDDC from '@/app/assets/DDDC-logo.png'
import Image from "next/image.js";

export default function Navibar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Services",
        "Pricing",
    ];

    return (
        <Navbar height={"5rem"} className="bg-neutral-100 text-neutral-600 fixed top-0" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="flex justify-center">
                    <Image
                        src={DDDC}
                        alt="DDDC Logo"
                        height={1000}
                        width={1000}
                        className="h-48 w-auto"
                    />
                    {/* <p className="font-bold text-inherit">Duct Daddy Duct Cleaning</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Pricing
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#">
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-neutral-100 text-neutral-600">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="mt-6">
                    <Button as={Link} color="primary" href="#" className="w-full">
                        Contact
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
