import Head from "next/head";
import PageLayout from "@components/tailwind/layouts/page-layout";
import InputIcon from "@components/tailwind/inputs/input-icon";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>
          Property - RBBC Realty | Real state, Condominiums for sale, House for
          sale, RFO, Rent to own
        </title>
      </Head>
      <PageLayout>
        <section className="container mx-auto px-8 h-full">
          <div className="flex flex-wrap">
            <div class="w-full h-auto lg:w-9/12 pr-8">
              <img src="https://res.cloudinary.com/dsmxjpcpa/image/upload/v1600409650/RBBC/header-photo-98336c6be52b04f90ff74430bac1a9e5_yjxe6h.jpg" />
            </div>

            <div class="hidden lg:block w-full sm:w-full lg:w-3/12">
              <div className="px-3 py-2 bg-gray-100 rounded border h-auto">
                <h4 className="text-lg text-center mb-2">
                  More about this property
                </h4>
                <form>
                  <InputIcon
                    placeholder="Full name"
                    icon="fa-user"
                    type="text"
                  />
                  <InputIcon
                    placeholder="Email"
                    icon="fa-envelope"
                    type="email"
                  />
                  <InputIcon placeholder="Phone" icon="fa-phone" type="text" />
                  <textarea
                    className="border w-full px-3 py-2 text-sm focus:outline-none focus:border-green-400 text-gray-700"
                    placeholder="I am interested in 2637 22nd St."
                  />
                  <button
                    type="submit"
                    className="bg-green-500 active:bg-blue-700 text-white py-2 w-full rounded-full text-sm my-3"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
