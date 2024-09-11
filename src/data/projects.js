import LC24Image from "images/sam_rah_backstage.jpeg";
import GallagherImage from "images/gallagher-premiership.jpeg";
import { P } from "components/layout";

export default [
  {
    title: "Gallagher Premiership Final 2024",
    description: (
      <P>
        I joined a team from RG Jones Sound Engineering to provide the audio for
        the Gallagher Premiership Final between Northampton Saints and Bath
        Rugby. We were responsible for the announcement, playback and DJ systems
        in the arena itself, as well as a secondary DJ system in the fan
        village.
      </P>
    ),
    photo: GallagherImage,
    slug: "gallagher-premiership",
  },
  {
    title: "Leadership Conference 2024",
    description: (
      <>
        <P>
          It was great to join the Leadership Conference again for their 2024
          event. This year, I was part of the team in the Albert Hall, looking
          after the side venues such as donor lounges and volunteer hub.
        </P>
        <P>
          During sessions while those venues were quiet, I was part of the stage
          team, as well as supporting the seminar venues with any problems that
          sprang up during the event.
        </P>
        <P>
          In the week leading up to lc24, I built the side venues with the rest
          of the HTB team, which involved rerigging and designing lights at HTB
          Onslow Square and Brompton Road.
        </P>
      </>
    ),
    photo: LC24Image,
    slug: "lc24",
  },
];
