import { useRouter } from 'next/router';

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

export default function Share() {
  const router = useRouter();
  const postUrl = `https://rbbcrealty.com${router.asPath}`;

  return (
    <div className="hidden lg:flex justify-end">
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center mr-2">
        <span className="mr-1">
          <i className="lni lni-heart"></i>
        </span>
      </button>
      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">
            <i className="lni lni-share"></i>
          </span>
        </button>
        <ul className="dropdown-menu origin-top-right absolute bg-white right-0 hidden text-gray-700 pt-1 shadow-lg border pb-2 z-10">
          <li className="px-5 py-1 text-sm">
            <EmailShareButton
              url={postUrl}
              subject="I've found this property on rbbcrealty.com"
              body="Please check this listing that I've found"
            >
              Email
            </EmailShareButton>
          </li>
          <li className="px-5 py-1 text-sm">
            <FacebookShareButton
              quote="I've found this property on rbbcrealty.com"
              url={postUrl}
            >
              Facebook
            </FacebookShareButton>
          </li>
          <li className="px-5 py-1 text-sm">
            <WhatsappShareButton
              url={postUrl}
              title="I've found this property on rbbcrealty.com"
            >
              Whatsapp
            </WhatsappShareButton>
          </li>
          <li className="px-5 py-1 text-sm">
            <ViberShareButton
              url={postUrl}
              title="I've found this property on rbbcrealty.com"
            >
              Viber
            </ViberShareButton>
          </li>
          <li className="px-5 py-1 text-sm">
            <TwitterShareButton
              url={postUrl}
              title="I've found this property on rbbcrealty.com"
            >
              Twitter
            </TwitterShareButton>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </div>
  );
}
