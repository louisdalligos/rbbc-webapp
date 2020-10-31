import React, { CSSProperties, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import classNames from "classnames";

const images = [
  {
    url:
      'https://res.cloudinary.com/dsmxjpcpa/image/upload/v1600409650/RBBC/header-photo-98336c6be52b04f90ff74430bac1a9e5_yjxe6h.jpg',
  },
  {
    url:
      'https://images.unsplash.com/photo-1603997478098-3a448cd7e521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];

export default function PropertyGallery() {
  const [hideGallery, setHideGallery] = useState(true)

  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
  };

  function viewGallery() {
    console.log('view gallery');
    setHideGallery(false)
  }

  return (
    <>
      <Carousel
        onClickItem={viewGallery}
        className="cursor-pointer"
        dynamicHeight={true}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
              className="text-4xl text-white text-shadow focus:outline-none"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
              className="text-4xl text-white text-shadow focus:outline-none"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )
        }
      >
        {images && images.length
          ? images.map((item, x) => {
              return (
                <div key={x}>
                  <img src={item.url} />
                </div>
              );
            })
          : null}
      </Carousel>

      <div className={classNames("fullscreen-gallery fixed w-full h-full top-0 left-0 z-100 bg-white", {
        hidden: hideGallery
      })}>
        <h2>Test</h2>
        <button onClick={() => {setHideGallery(true)}} type="button"><i className="fas fa-times"></i> Exit Gallery</button>
      </div>
    </>
  );
}

