import PulsatingButton from "./ui/pulsating-button";

const CTA = () => {
  return (
    <div className="text-center">
      <span className="text-lg">For more queries</span>
      <a href="mailto:prodigy@nitt.edu">
        <PulsatingButton className={"ml-3 inline-block"}>
          Contact Us
        </PulsatingButton>
      </a>
    </div>
  );
};

export default CTA;
