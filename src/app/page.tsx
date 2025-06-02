import Footer from "@/components/layout/Footer";
import Benefits from "./_components/Benefits";
import FandQ from "./_components/FandQ";
import FeaturesGrid from "./_components/FeaturesGrid";
import GamePlan from "./_components/GamePlan";
import Hero from "./_components/Hero/Hero";
import Imagine from "./_components/Imagine";
import IsThatYou from "./_components/IsThatYou";
// import Last from "./_components/Last";
import MemberShip from "./_components/MemberShip";
import NewsletterSubscription from "./_components/Newsletter";
import Pricing from "./_components/Pricing/Pricing";
import Problem from "./_components/Problem";
import QandA from "./_components/QandA";
import Reviews from "./_components/Reviews";
import SayGoodBTo from "./_components/SayGoodBTo";
// import TopBenefits from "./_components/TopBenefits";
import ResultsSection from "./_components/ResultsSection";
import CourseModules from "./_components/CourseMoudles";

export default function Home() {
  return (
    <>
      <main className=" bg-ground">
        <Hero />
        <ResultsSection />
        <Benefits />
        <FeaturesGrid />
        {/* <TopBenefits />*/}
        <Reviews />
        <Problem />
        <SayGoodBTo />
        <MemberShip />
        <Pricing />
        <CourseModules />
        <GamePlan />
        <IsThatYou />
        <QandA />
        <Imagine />
        <FandQ />
        {/* <Last /> */}
        <NewsletterSubscription />
      </main>
      <Footer />
    </>
  );
}
