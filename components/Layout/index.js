import React from "react";
import Head from "next/head";
import Header from "../Header";
import NavBar from "../NavBar";
import MessageModal from "../MessageModal";
import { closeMessageModal } from "../../actions/messageModal";
import { connect } from "react-redux";

const Layout = ({
  children,
  closeMessageModalAction,
  isShowMessageModal,
  titleMessageeModal,
  textMessageModal
}) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDR5dtYn2uoLVh_Mvz7kjBlmCXtM9UoItg"></script>
      </Head>
      <div className="wrap-page">
        <Header />
        <div className="wrap-content">
          <NavBar />
          <main>{children}</main>
        </div>
      </div>
      <MessageModal
        title={titleMessageeModal}
        message={textMessageModal}
        isShow={isShowMessageModal}
        closeModal={closeMessageModalAction}
      />
    </>
  );
};

const mapStateToProps = store => ({
  isShowMessageModal: store.messageModal.isShow,
  titleMessageeModal: store.messageModal.title,
  textMessageModal: store.messageModal.message
});

const mapDispatchToProps = dispatch => {
  return {
    closeMessageModalAction: () => dispatch(closeMessageModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
