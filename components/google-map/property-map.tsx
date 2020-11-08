import GoogleMapReact from 'google-map-react';

const LocationPin = ({ text }) => (
  <div className="pin">
    <img src="/images/200px-Map_pin_icon_green.svg.png" width="40" />
    <p className="pin-text bg-white border p-2 w-1/6 text-center text-gray-700">
      {text}
    </p>
  </div>
);

export default function PropertyMap({ location, zoomLevel }) {
  function createMapOptions(maps) {
    return {
      mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
    };
  }

  return (
    <div className="property-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        options={createMapOptions}
      >
        <LocationPin text={location.address} />
      </GoogleMapReact>
      <style jsx>{`
        .property-map {
          height: 380px;
        }
        .pin-text {
        }
      `}</style>
    </div>
  );
}
