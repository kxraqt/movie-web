"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Film } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemeActive = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");

  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("Genre");
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-Show",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Thriller",
    "War",
    "Western",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleGenreDropdown = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setIsGenreOpen(false);
    console.log("Selected genre:", genre);
  };

  useEffect(() => {
    window.localStorage.setItem("name", "jvk");
  }, []);

  return (
    <header className=" text-white p-4 flex items-center justify-between">
      <div className="flex">
        <Film className="w-6 h-6 text-[#4338CA] mr-2" />
        <p className="font-bold text-lg text-[#4338CA]">Movie Z</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button
            className="  text-black rounded-md py-2 px-3 flex items-center space-x-2"
            onClick={toggleGenreDropdown}
            variant="outline"
          >
            <span>{selectedGenre}</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          {isGenreOpen && (
            <div className="absolute top-full left-0 rounded-md shadow-md mt-1 w-32 z-10">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="">
                        {genres.map((genre) => (
                          <button
                            key={genre}
                            onClick={() => handleGenreSelect(genre)}
                            className="block py-2 px-4 text-sm w-full text-left text-black dark:text-white focus:outline-none"
                          >
                            {genre}
                          </button>
                        ))}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={searchInputRef}
            className="  py-2 pl-10 pr-3 text-black text-blackfocus:outline-none focus:ring-blue-500"
          />
        </div>
      </div>

      {/* THIS IS THE CORRECTLY PLACED THEME TOGGLE BUTTON */}
      <Button
        size="icon"
        onClick={toggleTheme}
        className="ml-4 hover:bg-gray-700 text-white theme-toggle"
        type="button"
        title="Toggle theme"
        aria-label="Toggle theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="1em"
          height="1em"
          fill="currentColor"
          strokeLinecap="round"
          className="theme-toggle__classic"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle__classic__cutout">
            <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
          </clipPath>
          <g clipPath="url(#theme-toggle__classic__cutout)">
            <circle cx="16" cy="16" r="9.34" />
            <g stroke="currentColor" strokeWidth="1.5">
              <path d="M16 5.5v-4" />
              <path d="M16 30.5v-4" />
              <path d="M1.5 16h4" />
              <path d="M26.5 16h4" />
              <path d="m23.4 8.6 2.8-2.8" />
              <path d="m5.7 26.3 2.9-2.9" />
              <path d="m5.8 5.8 2.8 2.8" />
              <path d="m23.4 23.4 2.9 2.9" />
            </g>
          </g>
        </svg>
      </Button>
    </header>
  );
};

export default Header;
