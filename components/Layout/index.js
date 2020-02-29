import React from "react";
import Head from "next/head";
import Header from "../Header";
import NavBar from "../NavBar";
import MessageModal from "../MessageModal";
import { closeMessageModal } from "../../actions/messageModal";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import TabLogo from "../../assets/img/map-marker.png";
const Layout = ({
  children,
  closeMessageModalAction,
  isShowMessageModal,
  titleMessageeModal,
  textMessageModal,
  router,
}) => {

  const isMainPage = router.route === '/';

  return (
    <>
      <Head>
        <title>Jays : Сoffee Brewers</title>
        <meta name="description" content="Мережа кав'ярень Jays: Coffee - Найкраща кава у твоєму місті! Офіційний сайт." />
        <meta name="keywords" content="кофейня запорожье, кофе, jays coffee brewers, jays, кава запоріжжя, купить кофе запорожье, coffee zaporizhia, coffee zaporozhye" />
        <link rel="icon" href={TabLogo}></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159338082-1"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-159338082-1');
        `}} />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`}></script>
      </Head>
      <div className="wrap-page">
        <Header />
        <div className="wrap-content">
          <NavBar />
          <main className={isMainPage ? '' : 'main-top-margin'}>{children}</main>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
