export default () => (
    <style jsx='true'>{`
        .wrap-rewards {
            width: calc(85vw - 50px);
            height: 85vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .title-rewards {
            font-size: 70px;
            text-align: center;
            margin-top: 10px;
        }
        .subtitle-rewards {
            text-align: center;
            width: 40%;
        }
        #bonusesForm {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 40%;
        }
        #phoneBonusesInput {
            width: 400px;
            outline: none;
            height: 50px;
            border: 1px solid #c1c1c1;
            border-radius: 4px;
            padding: 0px 50px;
            margin-top: 20px;
            font-size: 25px;
        }
        .errorText {
            color: red;
            margin-bottom: 20px;
        }
        #get-balance-btn {
            width: 400px;
            padding: 10px;
            font-size: 25px;
            color: white;
            background-color: black;
            border: 2px solid black;
            border-radius: 2px;
            transition: all 0.4s;
            outline: none;
        }
        #get-balance-btn:hover {
            color: black;
            background-color: white;
        }
        #get-balance-btn:disabled {
            opacity: 0.4;
        }
        .registration-link {
            margin-top: 20px;
            font-size: 20px;
        }
    `}</style>
)