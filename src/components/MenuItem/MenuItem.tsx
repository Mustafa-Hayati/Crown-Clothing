import "./MenuItem.scss";
import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

// If you want to use params like user/:userId then
// you have to path {userId: string} as generic type
// to RouteComponentProps. If you don't have params,
// then just extend your props interface with
// RouteComponentProps
interface Props extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FC<Props> = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  const onDivClick = (): void => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div onClick={onDivClick} className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// MenuItem.defaultProps = {
//   title: "",
// };

export default withRouter(MenuItem);
