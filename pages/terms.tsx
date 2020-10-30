import Head from 'next/head';
import PageLayout from "@components/tailwind/layouts/page-layout"

export default function Terms() {
  return (
    <>
        <Head>
            <title>
            Terms &amp; Conditions - RBBC Realty | Real state, Condominiums for sale, House for sale,
            RFO, Rent to own
            </title>
        </Head>
        <PageLayout>
            <section className="container mx-auto px-4 h-full">
                <h2 className="text-3xl mb-8">Terms &amp; Conditions</h2>

                <h3 className="text-lg font-semibold">1. Terms</h3>
                <p className="leading-loose mb-6 ml-5">By accessing the website at <a href="https://www.rbbcrealty.com">https://www.rbbcrealty.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

                <h3 className="text-lg font-semibold">2. Use License</h3>
                <ol type="a" className="leading-loose mb-6 ml-10 list-disc">
                    <li>Permission is granted to temporarily download one copy of the materials (information or software) on RBBC Realty Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        <ol type="i" className="leading-loose mb-6 ml-10 list-decimal">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on RBBC Realty Inc.'s website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ol>
                    </li>
                    <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by RBBC Realty Inc. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
                </ol>

                <h3 className="text-lg font-semibold">3. Disclaimer</h3>
                <ol type="a" className="leading-loose mb-6 ml-10 list-disc">
                    <li>The materials on RBBC Realty Inc.'s website are provided on an 'as is' basis. RBBC Realty Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                    <li>Further, RBBC Realty Inc. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
                </ol>

                <h3 className="text-lg font-semibold">4. Limitations</h3>
                <p className="leading-loose mb-6 ml-5">In no event shall RBBC Realty Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RBBC Realty Inc.'s website, even if RBBC Realty Inc. or a RBBC Realty Inc. authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

                <h3 className="text-lg font-semibold">5. Accuracy of materials</h3>
                <p className="leading-loose mb-6 ml-5">The materials appearing on RBBC Realty Inc.'s website could include technical, typographical, or photographic errors. RBBC Realty Inc. does not warrant that any of the materials on its website are accurate, complete or current. RBBC Realty Inc. may make changes to the materials contained on its website at any time without notice. However RBBC Realty Inc. does not make any commitment to update the materials.</p>

                <h3 className="text-lg font-semibold">6. Links</h3>
                <p className="leading-loose mb-6 ml-5">RBBC Realty Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RBBC Realty Inc. of the site. Use of any such linked website is at the user's own risk.</p>

                <h3 className="text-lg font-semibold">7. Modifications</h3>
                <p className="leading-loose mb-6 ml-5">RBBC Realty Inc. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

                <h3 className="text-lg font-semibold">8. Governing Law</h3>
                <p className="leading-loose mb-6 ml-5">These terms and conditions are governed by and construed in accordance with the laws of Philippines and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </section>
        </PageLayout>
    </>
  );
};
