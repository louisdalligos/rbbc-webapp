import PropertyMap from '@components/google-map/property-map';
let parse = require('html-react-parser');

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function PropertDetails({
  description,
  features,
  bed,
  bath,
  area,
  latitude,
  longitude,
  year,
  address,
}) {
  const location = {
    address: address
      ? address
      : 'Elliptical Rd, Diliman, Quezon City, Metro Manila',
    lat: parseFloat(longitude ? longitude : 14.6635826),
    lng: parseFloat(latitude ? latitude : 121.0369535),
  };

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
          <div className="lg:flex text-sm">
            <div className="flex-1 p-2 text-center">
              Property Type: <strong>Townhouse</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              Bed: <strong>{bed}</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              Toilet &amp; bath: <strong>{bath}</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              Garage: <strong>{bath}</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              Area: <strong>{area} sqm</strong>
            </div>
            <div className="flex-1 p-2 text-center">
              Year built: <strong>{year}</strong>
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
                      <td className="border px-4 py-2">
                        Unit Type: <strong>{item.desc}</strong>
                      </td>
                      <td className="border px-4 py-2">
                        Area: <strong>{item.area}</strong>
                      </td>
                      <td className="border px-4 py-2">
                        Starting Price: <strong>{item.price}</strong>
                      </td>
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
          <PropertyMap location={location} zoomLevel={17} />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
