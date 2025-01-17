"use client";
import MyLightImage from '@/public/dark.png';
import MyDarkImage from '@/public/white.png';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaAngleDown } from 'react-icons/fa';

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <footer className="footer py-4 border-t bg-base-200 text-base-content border-base-300 flex flex-col md:flex-row justify-between items-center mt-24 px-8">
            <aside className="flex items-center mb-4 md:mb-0">
                <Link href="/">
                    {isDarkMode ? (
                        <div className="cursor-pointer">
                            <Image
                                src={MyDarkImage}
                                alt="Logo de Alphaqueb"
                                width={90}
                                height={90}
                                className="rounded-full"
                            />
                        </div>
                    ) : (
                        <div className="cursor-pointer">
                            <Image
                                src={MyLightImage}
                                alt="Logo de Alphaqueb"
                                width={90}
                                height={90}
                                className="rounded-full"
                            />
                        </div>
                    )}
                </Link>
                <p className="text-base pl-4 dark:text-slate-100">
                    Alphaqueb Consulting SAS <br /> Acercando la sistematización a empresas manufactureras.
                </p>
            </aside>

            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                {/* Enlaces Relevantes */}
                <Link href="/aviso-de-privacidad" className="text-base dark:text-slate-100 hover:text-orange-500">
                    Aviso de Privacidad
                </Link>
                <Link href="/terminos-y-condiciones" className="text-base dark:text-slate-100 hover:text-orange-500">
                    Términos y Condiciones
                </Link>
                <Link href="/politica-de-seguridad" className="text-base dark:text-slate-100 hover:text-orange-500">
                    Política de Seguridad
                </Link>

                {/* Menú Desplegable */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="text-base dark:text-slate-100 hover:text-orange-500 flex items-center"
                    >
                        Más Políticas <FaAngleDown className="ml-1" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                            <ul className="py-1">
                                <li>
                                    <Link href="/aviso-de-cumplimiento-ambiental" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Aviso de Cumplimiento Ambiental
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aviso-legal" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Aviso Legal
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-accesibilidad" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Accesibilidad
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-anti-soborno-y-corrupcion" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Anti-Soborno y Corrupción
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-comentarios-o-contenido-generado-por-usuarios" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Comentarios o Contenido Generado por Usuarios
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-cookies" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Cookies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-cumplimiento-regulatorio" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Cumplimiento Regulatorio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-enlaces-externos" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Enlaces Externos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-etica-empresarial" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Ética Empresarial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-proteccion-de-datos-personales" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Protección de Datos Personales
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-uso-aceptable-de-recursos-tecnologicos" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Política de Uso Aceptable de Recursos Tecnológicos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </footer>
    );
};

export default Footer;