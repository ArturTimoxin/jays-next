import React from "react";
import { connect } from "react-redux";
import Styles from "./styles";
import { getPointData } from "../../actions/point";
import LocationItem from '../../components/LocationItem';

const Point = props => {
  const {
    pointId,
    pointData,
    getPointDataAction,
    map,
  } = props;

  const {
    mainImageURL,
    pointName,
    pointDescription,
    neighborhoodPoints,
    shopData: { address, tel, workTime }
  } = pointData;

  let miniMap = React.createRef();

    React.useEffect(() => {
        getPointDataAction(pointId, miniMap);
    }, []);

  return (
    <>
      <div
        id="mainImagePoint"
        style={{ backgroundImage: "url(" + mainImageURL + ")" }}
      />
      <div className="infoPoint">
        <div className="pointDataSection">
          <article className="titleAndDescriptionWrapper">
            <h1 className="page-section-text left-margin-none">{pointName}</h1>
            <hr />
            <section>{pointDescription}</section>
          </article>
          <p className='titleLocationItems'>
           Iнші точки JAYS:
          </p>
          <hr />
          <div className="locationsItems">
            {neighborhoodPoints.map(elem => (
              <LocationItem 
                id={elem._id}
                pointName={elem.name}
                imageURL={elem.imageURL}
              />
            ))}
          </div>
        </div>
        <div className="shopDataSection">
          <h2 className="page-section-text left-margin-none">Дані точки</h2>
          <hr />
          <div className="infoAddress">
            <div className="subtitle">Адреса:</div>
            <div className="info">{address}</div>
            <div className="miniMapWrapper">
              <div
                id="miniMap"
                ref={node => {
                  miniMap = node;
                }}
              />
            </div>
          </div>
          <hr />
          <div className="infoTel">
            <div className="subtitle">Телефон:</div>
            <div className="info">{tel}</div>
          </div>
          <hr />
          <div className="workTime">
            <div className="subtitle">Робочий час:</div>
            <div className="info">{workTime}</div>
          </div>
        </div>
      </div>
      <Styles />
    </>
  );
};

Point.getInitialProps = async ({ query, store }) => {
  await store.dispatch(getPointData(query.pointId));
  return { ...store.getState().point, ...query };
};

const mapStateToProps = store => store.point;

const mapDispatchToProps = dispatch => {
  return {
    getPointDataAction: (pointID, mapRef) =>
      dispatch(getPointData(pointID, mapRef))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Point);
