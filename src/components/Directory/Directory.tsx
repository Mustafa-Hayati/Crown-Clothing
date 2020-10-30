import "./Directory.scss";
import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import SECTIONS_DATA from "./sectionsData";

export interface Cloth {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
}

const Directory: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sections, setSections] = useState<Cloth[]>(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
