"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getHeroApi } from "@/Hooks/GetHeroApi";

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

export const Hero = () => {
  const [upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);

  useEffect(() => {
    const nowPlaying = async () => {
      const response = await getHeroApi();
      const firstFive = response?.results.splice(0, 5);
      setUpcoming(firstFive);
      console.log(firstFive);
    };
    nowPlaying();
  }, []);

  return (
    <div className="w-full h-full relative">
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full h-full">
          {upcoming.map((el, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-0">
                <Card className="border-none">
                  <CardContent className="flex items-center justify-center p-0">
                    <div className="relative w-full h-full min-h-[900px]">
                      {/* Background Image */}
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                        fill
                        alt={el.title}
                        priority
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute inset-0 bg-black opacity-40"></div>

                      {/* Overlay */}
                      <div className="absolute inset-0  flex items-center px-70">
                        {" "}
                        "Now playing:"
                        <div className="mb-2 text-yellow-400 font-semibold">
                          {" "}
                          ⭐ {el.vote_average.toFixed(1)} / 10{" "}
                        </div>
                        <div className="text-white max-w-[600px]">
                          <h2 className="text-4xl font-bold mb-4">
                            {el.title}
                          </h2>
                          <p className="text-sm line-clamp-3">{el.overview}</p>
                          <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
                            ▶ Watch Trailer
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-10 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};
