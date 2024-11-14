import Benefits from "./_components/Benefits";
import FandQ from "./_components/FandQ";
import FeaturesGrid from "./_components/FeaturesGrid";
import GamePlan from "./_components/GamePlan";
import Hero from "./_components/Hero";
import Imagine from "./_components/Imagine";
import IsThatYou from "./_components/IsThatYou";
import Last from "./_components/Last";
import MemberShip from "./_components/MemberShip";
import NewsletterSubscription from "./_components/Newsletter";
import Pricing from "./_components/Pricing";
import Problem from "./_components/Problem";
import QandA from "./_components/QandA";
import Reviews from "./_components/Reviews";
import SayGoodBTo from "./_components/SayGoodBTo";
import TopBenefits from "./_components/TopBenefits";

export default function Home() {
  return (
    <main className="px-4 md:px-0 ">
      <Hero/>
      <Benefits/>
      <TopBenefits/>
      <Reviews/>
      <Problem/>
      <SayGoodBTo/>
      <MemberShip/>
      <Pricing/>
      <GamePlan/>
      <IsThatYou/>
      <FeaturesGrid/>
      <QandA/>
      <Imagine/>
      <FandQ/>
      <Last/>
      <NewsletterSubscription/>
    </main>
  );
}