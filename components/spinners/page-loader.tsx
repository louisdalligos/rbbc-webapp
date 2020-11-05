export default function PageLoader() {
  return (
    <>
      <div className="container mx-auto h-full mt-5">
        <div className="h-full block top-0 left-0 bg-white opacity-75 z-50">
          <span className="spinner text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
            <i className="fas fa-circle-notch fa-spin fa-3x"></i>
          </span>
        </div>
      </div>
      <style jsx>{`
        .spinner {
          top: 50%;
        }
      `}</style>
    </>
  );
}
