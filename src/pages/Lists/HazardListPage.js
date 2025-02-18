import Item from '../../components/Item'
import Hazards from '../../dataFiles/hazards.json';
import GridBrowser from "../../components/GridBrowser";
import Layout from '../../components/Layout'
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from 'reactstrap'

export default function HazardListPage() {
  return (
    <Layout title="Hazard">
      <h1 className='mb-4'>Hazards</h1>
      <p className="text-light">Hazards are an official variant introduced in Cosmic Conflict. The variant adds an additional hazard deck which is drawn from whenever a destiny card with a hazard warning is drawn (which is roughly 25% of the destiny deck).
        <br />
        Cosmic Conflict introduced 17 hazard cards, 8 of which had duplicated to create a 24-card deck. Cosmic Odyssey introduced an additional 26 cards to bring the total up to 50 hazard cards.</p>
      <h2>Trivia</h2>
      <ul>
        <li className="text-light">Alt-Hazards were originally called Armistices during playtesting.</li>
      </ul>
      <hr className="border border-light border-2 opacity-100 mb-3" />
      <UncontrolledAccordion defaultOpen={[]}>
        <AccordionItem>
          <AccordionHeader targetId="1">Rules</AccordionHeader>
          <AccordionBody accordionId="1">
            <p className="text-light">These are copied from the Cosmic Odyssey campaign guide, with slight modification to include designer clarification.</p>
            <h3>Setup</h3>
            <ul>
              <li className="text-light">Shuffle the hazard deck and place it near the warp.</li>
            </ul>
            <h3>Gameplay</h3>
            <ul>
              <li className="text-light">During the destiny phase, if a player draws a destiny card with a hazard warning on it, a hazard card is drawn at the end of the destiny phase, regardless of whether that destiny card is used or redrawn.</li>
              <ul>
                <li className="text-light">Hazard warnings beyond the first drawn during the same encounter have no additional effect.</li>
              </ul>
              <li className="text-light">Hazard cards that are drawn take effect for the current encounter and, unless they are marked otherwise, are discarded to a hazard deck discard pile. Any abilities that affect discard piles do not affect this discard pile.</li>
              <li className="text-light">When the hazard deck has no cards in it, shuffle its discard pile to make a new hazard deck.</li>
            </ul>
            <h3>Hazard Types</h3>
            <p className="text-light">Cosmic Conflict had two types of hazards, and Cosmic Odyssey added two new types of hazard cards.</p>
            <ul>
              <li className="text-light">Temporary, which is the standard hazard card that is not labeled otherwise. When such a card is drawn, its effect is resolved and discarded.</li>
              <li className="text-light">Semi-Permanent, which are hazard cards that have a yellow bar that reads "Semi-Permanent". These remain in play and have a continuous effect. When another Semi-Permanent card is placed in the play area, the previous card is discarded.</li>
              <li className="text-light">Permanent, which are hazards card that have a red bar that reads "Remains in play". These remain in play and have a continuous effect. Some have a condition on the card that cause the hazard to be discarded.</li>
              <li className="text-light">Alt-Hazards, which give the offense an alternative option to having an encounter. If the offense chooses to use the alt-hazard effect, it ends that player’s encounter and provides a different effect for all other players.</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
      <hr className="border border-light border-2 opacity-100 mb-5" />
      <GridBrowser cardTemplate={Item}
        url="/Variants/Hazards"
        content={Hazards.hazards}
        border={(item) => {
          return { "AltHazard": "success", "Permanent": "danger", "SemiPermanent": "warning", "Hazard": "secondary" }[item.type];
        }}
        type={(item) => { return item.type }}
      />
    </Layout>
  );
}