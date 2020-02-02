import React from "react";
import Link from "next/link";

const LocationItem = ({ id, pointName, imageURL }) => {
  return (
    <>
        <Link as={`/point/${id}`} href={`/point?pointId=${id}`}>
            <div className="pointInfoWrapper">
                <img className="pointImage" src={imageURL} alt={pointName} />
                <div className="pointAddress">{pointName}</div>
            </div>
        </Link>
    </>
  );
};

export default LocationItem;
