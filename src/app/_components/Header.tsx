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
  <Button
    size="icon"
    onClick={toggleTheme}
    className="ml-4 hover:bg-gray-700 text-white"
  >
    {isDarkThemeActive ? (
      <Sun className="text-black" />
    ) : (
      <Moon className="text-white" />
    )}
  </Button>;

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
            className="  py-2 pl-10 pr-3 text-blackfocus:outline-none focus:ring-blue-500"
          />
        </div>
      </div>

      <Button size="icon" onClick={toggleTheme} className="ml-4  text-white">
        {isDarkThemeActive ? (
          <Sun className="text-white" />
        ) : (
          <Moon className="text-white" />
        )}
      </Button>
    </header>
  );
};

export default Header;
