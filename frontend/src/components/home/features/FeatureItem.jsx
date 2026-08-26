const FeatureItem = ({ Icon, text, desc }) => {
  return (
    <div className="group relative rounded-2xl border border-purple-100 bg-white hover:border-purple-200 hover:shadow-lg hover:shadow-purple-800/5 hover:-translate-y-1 transition-all p-5 md:p-6 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-purple-800 text-white group-hover:bg-purple-700 group-hover:scale-110 transition-all">
        <Icon className="text-2xl md:text-3xl" />
      </div>

      <div>
        <h5 className="font-semibold text-sm md:text-base text-secondary-900 mb-1">
          {text}
        </h5>
        <p className="text-xs text-secondary-500 hidden md:block">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
