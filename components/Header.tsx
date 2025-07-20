import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const headerMenu = [
    {
      title: "Smart pixel",
      href: "/",
    },

    {
      title: "Refund Police",
      href: "/",
    },

    {
      title: "Support 24/7",
      href: "/",
    },
  ];

  return (
    <div className="flex flex-row w-full px-14 py-10 items-center justify-between fixed top-0 left-0 right-0">
      <div className="flex justify-center items-center">
        <img src="/images/Adwin_logo.png" alt="Adiwn-logo" />
      </div>
      <div className="flex flex-row justify-between items-center min-w-[50%]">
        <div className="flex flex-row lg:gap-9 gap-4 items-center">
          {headerMenu.map((tab, idx) => {
            return (
              <a
                href={tab.href}
                className="text-white font-normal text-base cursor-pointer font-tektur"
                key={idx}
              >
                {tab.title}
              </a>
            );
          })}
        </div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
