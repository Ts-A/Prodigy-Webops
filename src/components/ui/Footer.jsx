const Footer = () => {
  return (
    <div className="bg-pr-t h-[50px] flex justify-center items-center text-center">
      <span className="font-bold px-2">Made with ❤️ by Prodigy WebOps</span>
      <div className="divide-x divide-pr-s flex">
        <span>
          <a
            href="https://github.com/Ts-A/Prodigy-Webops"
            rel="noopener"
            target="_blank"
          >
            <img
              className="mx-2 rounded cursor-pointer"
              src="/assets/icons/github.svg"
              height={26}
              width={26}
              alt="github"
            />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/prodigynittrichy/?hl=en"
            rel="noopener"
            target="_blank"
          >
            <img
              className="mx-2 rounded cursor-pointer"
              src="/assets/icons/instagram.svg"
              height={26}
              width={26}
              alt="instagram"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
