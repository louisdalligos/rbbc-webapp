import InquiryFormFooter from '@components/forms/inquiry-form-footer';

export default function PropertContactSection({ propertyTitle }) {
  return (
    <section className="pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-11/12 px-4 mx-auto">
            <h2 className="text-2xl mb-8">Learn more about {propertyTitle}</h2>

            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-2/5 bg-gray-300 px-6 pt-4 pb-10">
                <InquiryFormFooter title="Ask a question" />
              </div>
              <div className="hidden lg:block w-2/5">
                <div className="item-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        form {
          max-height: 410px;
        }
        .item-bg {
          background-image: url('https://res.cloudinary.com/dsmxjpcpa/image/upload/v1600409650/RBBC/header-photo-98336c6be52b04f90ff74430bac1a9e5_yjxe6h.jpg');
          background-repeat: no-repeat;
          min-height: 448px;
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </section>
  );
}
