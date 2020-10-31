import Image from 'next/image';

export default function PropertDetails() {
  return (
    <section className="my-10">
      <article className="border-b">
        <div className="border-l-2 border-transparent">
          <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
            <span className="text-grey-darkest font-semibold text-xl">
              <i className="fas fa-home mr-2"></i> Open House
            </span>

            <i className="fas fa-chevron-down"></i>
          </header>
        </div>
      </article>
      <article className="border-b">
        <div className="border-l-2 bg-grey-lightest border-indigo">
          <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
            <span className="text-indigo font-semibold text-xl">
              <i className="fas fa-home mr-2"></i> Property Details
            </span>
            <i className="fas fa-chevron-up"></i>
          </header>
          <div>
            <div className="pl-3 pr-3 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quo
              esse consequuntur obcaecati asperiores officia totam autem eos
              sed, ut cupiditate! Placeat delectus, quaerat at non perferendis
              expedita! Sed, atque.
            </div>
          </div>
        </div>
      </article>
      <article className="border-b">
        <div className="border-l-2 border-transparent">
          <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
            <span className="text-grey-darkest font-semibold text-xl">
              <i className="fas fa-home mr-2"></i> Nearby Schools
            </span>
            <i className="fas fa-chevron-down"></i>
          </header>
        </div>
      </article>
      <article className="border-b">
        <div className="border-l-2 border-transparent">
          <header className="flex justify-between items-center p-5 pl-3 pr-3 cursor-pointer select-none">
            <span className="text-grey-darkest font-semibold text-xl">
              <i className="fas fa-home mr-2"></i> Payment
            </span>
            <i className="fas fa-chevron-down"></i>
          </header>
        </div>
      </article>
    </section>
  );
}
