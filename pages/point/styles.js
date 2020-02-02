export default () => (
    <style jsx='true'>{`
      #mainImagePoint {
          width: 95%;
          height: 70vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin-top: 25px;
      }
      .infoPoint {
        display: flex;
        justify-content: space-between;
        width: 95%;
        padding: 50px 50px 50px 0px;
        @media screen and (max-width: 860px) {
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      .pointDataSection {
        width: 70%;
        margin-right: 40px;
        @media screen and (max-width: 860px) {
          width: 100%;
          margin-right: 0;
        }
      }
      .shopDataSection {
        min-width: 285px;
        padding: 20px 30px 15px 30px;
        background: #f8f8f8;
        @media screen and (max-width: 860px) {
          width: 100%;
        }
      }
      .miniMapWrapper {
        margin-top: 20px;
        width: 100%;
        height: 250px;
      }     
      #miniMap {
        width: 100%;
        height: 100%;
      }
      .titleLocationItems {
        font-size: 30px;
        margin-top: 20px;
      }
    `}</style>
)