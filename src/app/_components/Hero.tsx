"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    <div className="w-full relative">
      <Carousel className="w-full h-full">
        <CarouselContent className="w-full h-auto">
          {upcoming.map((el, index) => (
            <CarouselItem key={index} className="w-full">
              {" "}
              <div className="p-0">
                {" "}
                <Card className="border-none">
                  {" "}
                  <CardContent className="flex items-center justify-center p-0">
                    {" "}
                    <div className="relative w-full h-[50vh] min-h-[300px]">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                        fill
                        alt={el.title}
                        objectFit="cover"
                        priority
                        className="object-center"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};
