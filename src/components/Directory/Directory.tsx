import "./Directory.scss";
import React, { useState } from "react";
import MenuItem from "./../MenuItem/MenuItem";

export interface Cloth {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
}

const InitialSections = [
  {
    title: "hats",
    imageUrl: "/images/hats.png",
    id: 1,
    linkUrl: "hats",
  },
  {
    title: "jackets",
    imageUrl: "/images/jackets.png",
    id: 2,
    linkUrl: "",
  },
  {
    title: "sneakers",
    imageUrl: "/images/sneakers.png",
    id: 3,
    linkUrl: "",
  },
  {
    title: "womens",
    imageUrl: "/images/womens.png",
    size: "large",
    id: 4,
    linkUrl: "",
  },
  {
    title: "mens",
    imageUrl: "/images/men.png",
    size: "large",
    id: 5,
    linkUrl: "",
  },
];

const Directory: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sections, setSections] = useState<Cloth[]>(InitialSections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
