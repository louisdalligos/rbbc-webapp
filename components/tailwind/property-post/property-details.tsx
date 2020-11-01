import Image from 'next/image';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
          <p>
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
          </p>
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
          <p>
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
          </p>
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
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
            nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
            duis nulla non.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
    // <section className="my-10">
    //   <article className="border-b">
    //     <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
    //       <span className="text-grey-darkest font-semibold text-xl">
    //         <i className="fas fa-home mr-2"></i> Open House
    //       </span>
    //       <i className="fas fa-chevron-down"></i>
    //     </header>
    //       <div className="pl-3 pr-3 pb-5">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quo
    //         esse consequuntur obcaecati asperiores officia totam autem eos
    //         sed, ut cupiditate! Placeat delectus, quaerat at non perferendis
    //         expedita! Sed, atque.
    //       </div>
    //   </article>

    //   <article className="border-b">
    //     <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
    //       <span className="text-indigo font-semibold text-xl">
    //         <i className="fas fa-home mr-2"></i> Property Details
    //       </span>
    //       <i className="fas fa-chevron-up"></i>
    //     </header>

    //     <div className="pl-3 pr-3 pb-5">
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quo
    //       esse consequuntur obcaecati asperiores officia totam autem eos
    //       sed, ut cupiditate! Placeat delectus, quaerat at non perferendis
    //       expedita! Sed, atque.
    //     </div>

    //   </article>
    //   <article className="border-b">
    //     <div className="border-l-2 border-transparent">
    //       <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
    //         <span className="text-grey-darkest font-semibold text-xl">
    //           <i className="fas fa-home mr-2"></i> Nearby Schools
    //         </span>
    //         <i className="fas fa-chevron-down"></i>
    //       </header>
    //     </div>
    //   </article>
    //   <article className="border-b">
    //     <div className="border-l-2 border-transparent">
    //       <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
    //         <span className="text-grey-darkest font-semibold text-xl">
    //           <i className="fas fa-home mr-2"></i> Payment
    //         </span>
    //         <i className="fas fa-chevron-down"></i>
    //       </header>
    //     </div>
    //   </article>
    // </section>
  );
}
