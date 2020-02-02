export default () => (
    <style jsx='true'>{`
        .wrap-locations {
            width: calc(85vw - 40px);
        }
        .mapWrapper {
            width: 100%;
            height: 55vh;
            display: flex;
            justify-content: flex-end;
        }
        #map {
            width: 95%;
            height: 100%;
        }
        .wrapperLocationsItems {
            margin-left: 5%;
            margin-top: 20px;
        }
        .titleLocation {
            font-size: 21px;
            letter-spacing: 2px;
        }
        .titleLocation:before {
            content: url("/img/before-jays-logo-mini-black.png");
            margin-right: 7px;
        }
        .titleSity {
            font-size: 16px;
            letter-spacing: 2px;
            margin-top: 11px;
        }
        .pointAddress {
            font-size: 14px;
        }
    `}
    </style>
);