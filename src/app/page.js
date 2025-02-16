import Header from "./components/Header";
import Section from "./components/Section";
import Blocks from "./components/Blocks";
import Footer from "./components/Footer";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <Header />
      <Section />
      <Blocks />
      <Footer />
    </div>
  );
}
