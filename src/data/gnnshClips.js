import ann1 from "../assets/gnnsh/announcments (1).mp4";
import ann2 from "../assets/gnnsh/announcments (2).mp4";
import ann3 from "../assets/gnnsh/announcments (3).mp4";
import ann4 from "../assets/gnnsh/announcments (4).mp4";
import fullReviewVideo from "../assets/gnnsh/full review video.mp4";
import podcastVideo from "../assets/gnnsh/podcast.mp4";

export const announcementClips = [
  {
    id: 1,
    src: ann1,
    title: "Brand Campaign",
    tag: "Commercial 01",
    aspect: "portrait",
  },
  {
    id: 2,
    src: ann2,
    title: "Launch Teaser",
    tag: "Promo 02",
    aspect: "portrait",
  },
  {
    id: 3,
    src: ann3,
    title: "Event Spotlight",
    tag: "Campaign 03",
    aspect: "portrait",
  },
  {
    id: 4,
    src: ann4,
    title: "Special Feature",
    tag: "Announcement 04",
    aspect: "portrait",
  },
];

export const reviewData = {
  src: fullReviewVideo,
  title: "In-Depth Production Review",
  subtitle: "cinematic feature",
  headline: "FULL REVIEW",
  description:
    "An extensive, full-length production review breaking down cinematography, framing technique, dynamic lighting, and post-production storytelling.",
  tags: [
    "4K Cinematography",
    "Color Grading",
    "Sound Design",
    "Creative Direction",
  ],
};

export const podcastVideoData = {
  src: podcastVideo,
  title: "Studio Podcast Session",
  subtitle: "Visualizing the Voice",
  description:
    "Live studio recording showcasing dynamic multi-angle framing, intimate lighting, and pristine audio-visual capture for long-form discussions.",
};
