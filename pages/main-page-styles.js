export default () => (
    <style jsx='true'>{`
        .wrap-carousel {
            width: calc(85vw - 35px);
            display: flex;
            justify-content: flex-end;
        }
        .carousel {
            width: 98%;
            height: 86vh;
            z-index: -1;
        }
        .carousel-inner {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
        .carousel-item {
            position: relative;
            transition: transform 3s ease;
            width: 100%;
            height: 100%;
        }
        .carousel-item div {
            height: 100%;
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }
    `}</style>
)