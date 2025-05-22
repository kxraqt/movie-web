import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import Movies from "./_components/Movies";
import Footer from "./_components/Footer";
import { getHeroApi } from "@/Hooks/GetHeroApi";

export default async function Home() {
  const movies = await getHeroApi();

  return (
    <div>
      <Hero />
      <Movies title="Featured Movies" movies={movies} />
    </div>
  );
}
