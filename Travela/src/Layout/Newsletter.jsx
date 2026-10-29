import React from "react";

const Newsletter = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1350&q=80')", // 
      }}
    >
   
      <div className="font-primary absolute inset-0 bg-primary/40"></div>

      
      <div className=" relative z-10 max-w-6xl mx-auto text-center text-white px-4">
        <h2 className="text-regular font-semibold tracking-widest uppercase  flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-white"></span>
          Subscribe
          <span className="w-12 h-[1px] bg-white"></span>
        </h2>
        <h2 className="text-large font-semibold mb-space-md">Our Newsletter</h2>
        <p className="text-white text-small mb-space-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          tempore nam, architecto doloremque velit explicabo? Voluptate sunt
          eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
          repellat a laborum quasi.
        </p>

        
       <form className="flex justify-center">
  <div className="relative w-full bg-white rounded-pill max-w-5xl">
    <input
      type="email"
      placeholder="Your email"
      className="w-full px-6 py-5 pr-36 rounded-pill outline-none text-small text-black"
    />
    <button
      type="submit"
      className="bg-primary border border-primary text-white text-small 
           px-btn-lg-x py-btn-lg-y rounded-pill font-semibold 
           hover:text-primary hover:bg-white 
           absolute top-1/2 right-2 -translate-y-1/2 transition"
    >
      Subscribe
    </button>
  </div>
</form>

      </div>
    </section>
  );
};

export default Newsletter;
