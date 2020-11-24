import "./Directory.scss";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem/MenuItem";
import { selectDirectorySection } from "../../Redux/selectors/directorySelector";
import { IDirectoryItem } from "../../Redux/types/directoryTypes";
import { IApplicationState } from "../../Redux/store/store";

interface IProps {
  sections: IDirectoryItem[];
}

const Directory: React.FC<IProps> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => {
        const { id, ...otherSectionProps } = section;
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

interface IDesiredSelection {
  sections: IDirectoryItem[];
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
