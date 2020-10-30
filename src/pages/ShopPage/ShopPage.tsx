import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "./ShopData";

const ShopPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ title, items, id }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default ShopPage;
