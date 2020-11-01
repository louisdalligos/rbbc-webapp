import PropertyMap from '@components/google-map/property-map';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const location = {
  address: 'Novaliches, Quezon City, Metro Manila',
  lat: 14.681537,
  lng: 121.079228,
};

export default function PropertDetails() {
  return (
    <Accordion allowMultipleExpanded preExpanded={['overview']}>
      <AccordionItem uuid="overview">
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="lni lni-layout mr-2"></i>
            Overview
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="flex text-sm">
            <div className="flex-1 p-2 text-center">
              Property Type: <strong>Townhouse</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              <i className="fas fa-bed mr-1 text-green-500"></i>
              <strong>3</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              <i className="fas fa-bath mr-1 text-green-500"></i>
              <strong>3</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              <i className="fas fa-warehouse mr-1 text-green-500"></i>
              <strong>2</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              <i className="fas fa-map-marked-alt mr-1 text-green-500"></i>
              <strong>127 sqm</strong>
            </div>
            <div className="flex-1 p-2">
              Year built: <strong>2020</strong>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="details">
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="lni lni-home mr-2"></i>
            Property Details
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="text-gray-900 text-sm leading-6">
            Highly desirable 2 br 2 ba top floor corner unit is available at the
            Royal-the former Royal Insurance Building-located in the heart of
            San Francisco Financial District. This historic landmark building
            was designed by Howell & Stokes Architects with Georgian Revival
            architecture. Built in 1909, it was extensively renovated in 2006
            and converted to condos. The elegant marble lobby is adorned with
            ornamentation from a 17th century Italian palazzo. Residence itself
            has windows on three side which provide an abundance of natural
            light throughout the day. It features hardwood floors, high
            ceilings, recessed lighting, chef's kitchen, in-unit w/d, central
            heating and air-conditioning. Off-site convenient parking is
            available. BART, ferry and bus services are virtually at your
            doorstep. Close to gym, cafes, restaurants and shops. Walk to nearby
            Union Square, Chinatown, North Beach and the Embarcadero waterfront
            is a breeze. This condo truly offers quintessential downtown living
            at its finest.
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="map">
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="lni lni-map-marker mr-2"></i>
            Google Map
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <PropertyMap location={location} zoomLevel={16} />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
