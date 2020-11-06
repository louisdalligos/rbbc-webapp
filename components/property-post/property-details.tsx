import PropertyMap from '@components/google-map/property-map';
let parse = require('html-react-parser');

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

export default function PropertDetails({ description, features }) {
  return (
    <Accordion allowMultipleExpanded preExpanded={['overview', 'details']}>
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
          <div className="text-gray-900 leading-7">
            {parse(`${description}`)}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="floorplans">
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="lni lni-map-marker mr-2"></i>
            Floor Plans &amp; Pricing
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <table className="table-auto text-gray-900">
            <tbody>
              {features &&
                features.map((item) => {
                  return (
                    <tr>
                      <td className="border px-4 py-2">Unit Type: <strong>{item.desc}</strong></td>
                      <td className="border px-4 py-2">Area: <strong>{item.area}</strong></td>
                      <td className="border px-4 py-2">Starting Price: <strong>{item.price}</strong></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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
