"use client";

import { useRouter } from "next/navigation";

const Links = [
  {
    id: 1,
    label: "new in",
    route: "/collections/new-in",
  },
  {
    id: 2,
    label: "Women",
    route: "/collections/women",
  },
  {
    id: 3,
    label: "luxury",
    route: "/collections/luxury",
  },
  {
    id: 4,
    label: "men",
    route: "/collections/men",
  },
  {
    id: 5,
    label: "home linen",
    route: "/collections/home-linen",
  },
  {
    id: 6,
    label: "accessories",
    route: "/collections/accessories",
  },
];

const LowerNavbar = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex items-center justify-center w-full font-[500] gap-10 py-4 shadow-sm text-sm">
      {Links.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(item.route)}
          className="cursor-pointer uppercase hover:text-neutral-400 transition-all"
        >
          {item.label}{" "}
        </div>
      ))}
    </div>
  );
};

export default LowerNavbar;

<div className="cursor-pointer hover:text-neutral-400 transition-all">
  NEW IN
</div>;
