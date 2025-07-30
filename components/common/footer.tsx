import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((key: string) => {
      const el = key as keyof typeof SOCIAL_LINKS;
      return (
        <a
          href={SOCIAL_LINKS[el]}
          key={el}
          className="link hover:opacity-80 duration-300 md:px-2 px-1"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
        </a>
      );
    });
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Feel free to connect with me.
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          target="_blank"
          rel="noreferrer"
          href="/resume.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={`mailto:${EMAIL}`}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        Designed and Developed with ❤️ by Matt Haydon
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        width={1440}
        height={290}
        loading="lazy"
        role="presentation"
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
