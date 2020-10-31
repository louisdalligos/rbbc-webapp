import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function PropertyGallery() {
  const viewGallery = () => {
    console.log(viewGallery);
  };
  return (
    <Carousel>
      <div>
        <img
          src="https://res.cloudinary.com/dsmxjpcpa/image/upload/v1600409650/RBBC/header-photo-98336c6be52b04f90ff74430bac1a9e5_yjxe6h.jpg"
          onClick={viewGallery}
        />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dsmxjpcpa/image/upload/v1600409650/RBBC/header-photo-98336c6be52b04f90ff74430bac1a9e5_yjxe6h.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dsmxjpcpa/image/upload/v1600409650/RBBC/header-photo-98336c6be52b04f90ff74430bac1a9e5_yjxe6h.jpg" />
      </div>
    </Carousel>
  );
}
