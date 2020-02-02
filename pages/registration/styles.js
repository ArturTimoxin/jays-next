export default () => (
    <style jsx='true'>{`
        .wrap-registration {
            width: calc(85vw - 50px);
            height: 85vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .title-registration {
            margin-top: 10px;
            font-size: 37px;
        }
        #registrationForm {
            display: flex;
            flex-direction: column;
            width: 40%;
            margin-top: 40px;
        }
        label {
            margin: 0px;
        }
        .registration-input {
            outline: none;
            height: 50px;
            border: 1px solid #c1c1c1;
            border-radius: 4px;
            font-size: 20px;
            padding: 0px 15px;
            margin-bottom: 20px;
        }
        #registerSubmitBtn {
            margin: 40px 0px 20px 0px;
            padding: 10px;
            font-size: 25px;
            color: white;
            background-color: black;
            border: 2px solid black;
            border-radius: 2px;
            transition: all 0.4s;
            outline: none;
        }
        #registerSubmitBtn:hover {
            color: black;
            background-color: white;
        }
        #registerSubmitBtn:disabled {
            opacity: 0.4;
        }
        .rewards-link {
            font-size: 20px;
            text-align: center;
        }
        .phoneError {
            color: red;
        }
        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    `}</style>
)