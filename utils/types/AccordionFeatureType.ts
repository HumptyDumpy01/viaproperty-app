import { AccordionTypeData } from '@/components/Layout/Accordion/AccordionPropertyDescription/Accordion';

export type AccordionFeatureType =
  `description`
  | `features`
  | `location`
  | `video-tour`
  | `contact-viewing-arrangements`
  | `price-task-history`
  | `floor-plans`
  ;

export type AccordionType = {
  setActiveState: (switchTo: AccordionFeatureType) => void;
  activeState: AccordionFeatureType;
  description: AccordionTypeData;
  propertyFor: `rent` | `sell`;
  // children: ReactNode;
}
