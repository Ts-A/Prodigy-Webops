import { VelocityScroll } from "../magicui/scroll-based-velocity";

const InfiniteVenue = () => {
  return (
    <VelocityScroll
      text="Sept 20 - Sept 23 @ NIT Trichy ||"
      default_velocity={5}
      className="mt-20 bungee-regular bg-pr-p text-pr-s font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
};

export default InfiniteVenue;
