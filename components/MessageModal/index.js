import React from "react";

const MessageModal = ({
  isShow,
  closeModal,
  title,
  message
}) => {
  if (!isShow) return null;

  return (
    <>
        <div className="wrapMessageModal">
            <div className="messageModal">
                <div className="headMessageModal">
                <p className="titleMessageModal">{title}</p>
                <span id="closeMessageModalBtn" onClick={closeModal}>
                    +
                </span>
                </div>
                <div className="wrapMessageModalInfo">
                    <p className="textMessageModal" dangerouslySetInnerHTML={{__html: message}} />
                </div>
            </div>
        </div>
    </>
  );
};

export default MessageModal;
