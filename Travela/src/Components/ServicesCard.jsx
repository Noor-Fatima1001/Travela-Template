import React from "react";

const ServicesCard = ({ title, description, Icon }) => {
  return (
  <div className="group flex items-center justify-between border border-gray-300 rounded-2xl p-6 shadow-sm bg-white max-w-xl mx-auto 
        hover:shadow-lg hover:bg-primary transition-transform hover:-translate-y-1 duration-300">

  <div className="max-w-[70%]">
    <h3 className="text-regular font-semibold text-gray-900 mb-2 group-hover:text-white">
      {title}
    </h3>

    <p className="text-gray-600 text-left text-small leading-relaxed group-hover:text-white">
      {description}
    </p>
  </div>

  <div className="flex-shrink-0 text-primary text-5xl group-hover:text-white">
    {React.isValidElement(Icon) ? Icon : <Icon />}
  </div>
</div>

  );
};

export default ServicesCard;
