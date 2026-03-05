import SlideDeck from "@/components/slide-deck";
import TitleSlide from "@/components/slides/title-slide";
import OverviewSlide from "@/components/slides/overview-slide";
import FeatureSlide from "@/components/slides/feature-slide";
import ImageSlide from "@/components/slides/image-slide";
import GallerySlide from "@/components/slides/gallery-slide";
import ComparisonSlide from "@/components/slides/comparison-slide";
import ScreenshotSlide from "@/components/slides/screenshot-slide";
import DiagramSlide from "@/components/slides/diagram-slide";
import ClosingSlide from "@/components/slides/closing-slide";

const slides = [
  <TitleSlide key="title" />,
  <OverviewSlide key="overview" />,
  <FeatureSlide key="feature" />,
  <ImageSlide key="image" />,
  <GallerySlide key="gallery" />,
  <ComparisonSlide key="comparison" />,
  <ScreenshotSlide key="screenshot" />,
  <DiagramSlide key="diagram" />,
  <ClosingSlide key="closing" />,
];

export default function Home() {
  return <SlideDeck slides={slides} />;
}
