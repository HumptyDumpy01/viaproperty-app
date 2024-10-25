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
  // children: ReactNode;
}
