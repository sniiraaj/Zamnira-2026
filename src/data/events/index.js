import dualSyntax from "./dual-syntax.js";
import promptopia from "./promptopia.js";
import byteBattles from "./byte-battles.js";
import techNova from "./tech-nova.js";
import twinTones from "./twin-tones.js";
import darkCrown from "./dark-crown.js";
import sonicEnigma from "./sonic-enigma.js";
import treasureHunt from "./treasure-hunt.js";

export const eventDetails = [
  dualSyntax,
  promptopia,
  byteBattles,
  techNova,
  twinTones,
  darkCrown,
  sonicEnigma,
  treasureHunt
];

export const eventDetailsById = Object.fromEntries(
  eventDetails.map((event) => [event.id, event])
);
