import { P } from "@/components/layout";

import LC24 from "@/images/sam_rah_backstage.jpeg";
import Gallagher from "@/images/gallagher-premiership.jpeg";
import StMarysFashionShow from "@/images/stmarys_fashionshow.jpg";
import StMarysDesk from "@/images/stmarys_desk.jpg";
import StMarysQuartet from "@/images/stmarys_quartet.jpg";
import StMarysTimes from "@/images/stmarys_thetimes.jpg";
import StMarysCarolsRussell from "@/images/stmarys_christmas_russell.jpg";
import StMarysCarolsVenue from "@/images/stmarys_christmas_venue.jpg";
import Summer26BSK from "@/images/summer26_bsk.jpg";
import Summer26NMK from "@/images/summer26_nmk.jpg";
import Summer26OOTB from "@/images/summer26_ootb.jpg";

const projects = [
  {
    title: "Summer Highlights",
    description: [
      `Well a lot of this year has flown by! Here are just a few highlights from the summer:`,
      `- Running stage audio for BSK festival`,
      `- Building the OOTB stage for Capital's Summer Ball`,
      `- Joining the Message Trust's band OTC for their Enfield schools tour`,
    ],
    photos: [Summer26BSK, Summer26OOTB, Summer26NMK],
    slug: "summer-26",
  },
  {
    title: "Carols at St Mary's",
    description: `In addition to my regular work at St Mary's, I was asked to take
        on the lighting for their spectacular christmas carol service. The evening featured
        incredible performances from the church's congregation and choir, and it was a real
        provilege to bring their ambitious vision to life.`,
    photos: [StMarysCarolsRussell, StMarysCarolsVenue],
    slug: "carols",
    photoCredit: {
      source: "St Mary's London",
      url: "https://www.stmaryslondon.com/",
    },
  },
  {
    title: "St Mary's Marylebone",
    description: `Since 2024, I've been part of the freelance events team at St
        Mary's church in Marylebone. As well as a thriving church on a Sunday, St Mary's
        hosts external events throughout the week. These have included fashion shows,
        candlelight concerts, book launches, charity fundraisers, and weddings.`,

    photos: [StMarysFashionShow, StMarysDesk, StMarysQuartet, StMarysTimes],
    slug: "st-marys",
  },
  {
    title: "Gallagher Premiership Final",
    description: `I joined a team from RG Jones Sound Engineering to provide the audio
        for the Gallagher Premiership Final between Northampton Saints and Bath Rugby. We
        were responsible for the announcement, playback and DJ systems in the arena itself,
        as well as a secondary DJ system in the fan village.`,

    photos: [Gallagher],
    slug: "gallagher-premiership",
  },
  {
    title: "Leadership Conference",
    description: [
      `It was great to join the Leadership Conference again for their 2024
        event. This year, I was part of the team in the Albert Hall, looking after the
        side venues such as donor lounges and volunteer hub.`,
      `During sessions while those venues were quiet, I was part of the stage team, as
        well as supporting the seminar venues with any problems that sprang up during the
        event.`,
      `In the week leading up to LC24, I built the side venues with the rest of the HTB
        team, which involved rerigging and designing lights at HTB Onslow Square and
        Brompton Road.`,
    ],
    photos: [LC24],
    photoCredit: {
      source: "Darleen Boettger",
      url: "https://www.instagram.com/darleen_m._b_photography",
    },
    slug: "lc24",
  },
];

export default projects;
