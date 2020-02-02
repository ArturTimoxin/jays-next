import React from "react";
const BonusesModal = ({
  isShow,
  toggleShowModal,
  firstname,
  lastname,
  bonus
}) => {
  if (!isShow) return null;

  return (
    <>
        <div className="wrapModal">
            <div className="modal">
                <div className="headModal">
                <p className="titleModal">{`${firstname} ${lastname}`}</p>
                <span id="closeModalBtn" onClick={toggleShowModal}>
                    +
                </span>
                </div>
                <div className="wrapModalInfo">
                <p className="textModal">На вашому рахунку {bonus} бонусів</p>
                <div className="subTextModal">*1 бонус = 1 грн</div>
                </div>
            </div>
        </div>
    </>
  );
};

export default BonusesModal;
