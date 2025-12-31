const FeatureItem = ({ src, alt, text }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="h-13 flex items-center">
        <img src={src} alt={alt} className="w-12.5" />
      </div>
      <p className="text-sm text-secondary-700">{text}</p>
    </div>
  );
};

export default FeatureItem;
