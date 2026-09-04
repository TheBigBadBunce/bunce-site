import { P } from "@/components/layout";

import LC24Image from "@/images/sam_rah_backstage.jpeg";
import GallagherImage from "@/images/gallagher-premiership.jpeg";
import StMarysFashionShowImage from "@/images/stmarys_fashionshow.jpg";

const projects = [
  {
    title: "St Mary's Marylebone",
    description: `Since 2024, I've been part of the freelance events team at
        St Mary's church in Marylebone. As well as a thriving church on a Sunday,
        St Mary's hosts external events throughout the week. These have included
        fashion shows, candlelight concerts, book launches, charity fundraisers,
        and weddings.`,
    photo: StMarysFashionShowImage,
    slug: "st-marys",
  },
  {
    title: "Gallagher Premiership Final 2024",
    description: `I joined a team from RG Jones Sound Engineering to provide
        the audio for the Gallagher Premiership Final between Northampton Saints
        and Bath Rugby. We were responsible for the announcement, playback and
        DJ systems in the arena itself, as well as a secondary DJ system in the
        fan village.`,
    photo: GallagherImage,
    slug: "gallagher-premiership",
  },
  {
    title: "Leadership Conference 2024",
    description: `
          It was great to join the Leadership Conference again for their 2024
          event. This year, I was part of the team in the Albert Hall, looking
          after the side venues such as donor lounges and volunteer hub.

          During sessions while those venues were quiet, I was part of the stage
          team, as well as supporting the seminar venues with any problems that
          sprang up during the event.

          In the week leading up to lc24, I built the side venues with the rest
          of the HTB team, which involved rerigging and designing lights at HTB
          Onslow Square and Brompton Road.`,
    photo: LC24Image,
    photoCredit: {
      source: "Darleen Boettger",
      url: "https://www.instagram.com/darleen_m._b_photography",
    },
    slug: "lc24",
  },
];

export default projects;
