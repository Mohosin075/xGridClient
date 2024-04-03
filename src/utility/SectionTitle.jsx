/* eslint-disable react/prop-types */

const SectionTitle = ({titleTxt}) => {
    return (
        <div className="secondary-font font-semibold inline-block">
            <div className="w-full h-3 md:h-5 bg-gray-400 skew-x-[20deg] mb-1"></div>
            <h2 className="text-xl md:text-4xl uppercase">{titleTxt}</h2>
        </div>
    );
};

export default SectionTitle;