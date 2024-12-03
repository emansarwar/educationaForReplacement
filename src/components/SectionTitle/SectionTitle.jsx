const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="mx-auto my-8 md:w-4/12 text-center">
        <p className="mb-4 text-yellow-600">--- {subHeading} ---</p>
        <h3 className="border-y-4 py-4 text-4xl uppercase">{heading}</h3>
      </div>
    );
  };
  
  export default SectionTitle;
  