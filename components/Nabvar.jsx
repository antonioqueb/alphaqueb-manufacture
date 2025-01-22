"use client";
import MyLightImage from '@/public/brand/white.png';
import MyDarkImage from '@/public/brand/dark.png';
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import ThemeMode from "../components/ThemeMode";
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const COPY = {
  tecnologias: {
    title: "Servicios Industriales",
    mainDescription: "Soluciones tecnológicas diseñadas para transformar la manufactura con innovación y eficiencia.",
    projects: [
      {
        href: "/servicios/scada",
        title: "Sistemas SCADA",
        description: "Supervisión y control en tiempo real de procesos industriales para máxima eficiencia."
      },
      {
        href: "/servicios/automatizar",
        title: "Automatización Industrial",
        description: "Implementación de soluciones robóticas que incrementan la productividad hasta un 40%."
      },
      {
        href: "/servicios/transformar",
        title: "Transformación Digital",
        description: "Estrategias personalizadas para digitalizar y optimizar operaciones manufactureras."
      }
    ]
  },
  blogs: {
    title: "Blogs",
    href: "/blogs"
  },
  navigation: {
    about: { href: "/nosotros", title: "Nosotros" },
    contact: { href: "#contacto", title: "Contacto" },
    impulseButton: "Cotizar Proyecto",
    mobileMenu: [
      { href: "/", title: "Inicio" },
      { href: "/servicios/automatizar", title: "Automatización" },
      { href: "/servicios/scada", title: "Sistemas SCADA" },
      { href: "/servicios/transformar", title: "Capacitación" },
      { href: "/nosotros", title: "Nosotros" },
      { href: "#contacto", title: "Contacto" },
      { href: "/blogs", title: "Blogs" }
    ]
  }
};

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
        <Link
            ref={ref}
            href={href}
            className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-zinc-100",
                className
            )}
            {...props}
        >
            <div className="text-lg font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
            </p>
        </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 justify-center"> {/* Ajustado el gap aquí */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-zinc-100 font-medium text-lg">{COPY.tecnologias.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                 <Link href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src="/dark.png" width={210} height={210} alt="logo" />
                    </div>
                    <p className="text-lg leading-tight text-muted-foreground">
                      {COPY.tecnologias.mainDescription}
                    </p>
                  </Link>
              </li>
              {COPY.tecnologias.projects.map((project) => (
                <ListItem key={project.href} href={project.href} title={project.title}>
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href={COPY.blogs.href} className="dark:text-zinc-100 font-medium text-lg">
                {COPY.blogs.title}
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href={COPY.navigation.about.href} className="dark:text-zinc-100 font-medium text-lg">
                {COPY.navigation.about.title}
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
           <Link href={COPY.navigation.contact.href} className="dark:text-zinc-100 font-medium text-lg">
                {COPY.navigation.contact.title}
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const classList = document.documentElement.classList;
    setIsDarkMode(classList.contains('dark'));
  }, []);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      setIsDarkMode(storedTheme === "dark");
    } else {
      setTheme(resolvedTheme);
      setIsDarkMode(resolvedTheme === "dark");
    }
  }, [resolvedTheme, setTheme]);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };
  return (
    <nav className="flex py-4 w-full justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          {isDarkMode ? (
            <div className="cursor-pointer">
              <Image
                src={MyDarkImage}
                alt="Logo de Alphaqueb"
                width={45}
                height={45}
              />
            </div>
          ) : (
            <div className="cursor-pointer">
              <Image
                src={MyLightImage}
                alt="Logo de Alphaqueb"
                width={45}
                height={45}
              />
            </div>
          )}
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenuDemo />
      </div>
      <div className="flex items-center gap-4">
        <Link href="#contacto" className="hidden md:block font-bold dark:text-zinc-100 border rounded-lg text-sm p-2 hover:bg-zinc-100 bg-custom-orange text-zinc-50 dark:hover:bg-orange-600 hover:text-black">
          {COPY.navigation.impulseButton}
        </Link>
        <div className="hidden md:block">
          <ThemeMode toggleTheme={toggleTheme} />
        </div>
        {/* Mobile Menu Button */}
        <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DrawerTrigger asChild>
            <button onClick={toggleMenu} className="md:hidden">
              <AiOutlineMenu size={28} className="dark:text-zinc-100" />
            </button>
          </DrawerTrigger>
          <DrawerContent
            className={`fixed top-0 left-0 h-full w-3/4 bg-white dark:bg-black transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
          >
            <DrawerHeader className="flex items-center justify-between p-4">
              <DrawerTitle className="text-xl font-semibold">Menú</DrawerTitle>
              <button onClick={toggleMenu} className="text-xl">
                ✕
              </button>
            </DrawerHeader>
            <DrawerDescription className="flex flex-col gap-4 p-4">
              {COPY.navigation.mobileMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg dark:text-zinc-100"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
              <div className="mt-4">
                <ThemeMode toggleTheme={toggleTheme} />
              </div>
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}