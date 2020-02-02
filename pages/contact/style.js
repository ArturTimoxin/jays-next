export default () => (
    <style jsx='true'>{`
        .wrapContact{
            width: calc(85vw - 50px);
            display:  flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }
        .wrapContactForm {
            width: 80%;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            font-family: Verdana, sans-serif;
            margin-bottom: 10vh;
        }         
        #contactForm {
            display: flex;
            flex-direction: column;
            width: 40%;
            @media screen and (max-width: 800px) {
                width: 60%;
            }
            @media screen and (max-width: 500px) {
                width: 90%;
            }
        }
        label {
            margin-top: 40px;
            font-size: 20px;
            font-weight: 400;
        }
        label:first-child {
            margin-top: 0px;
        }
        label[for="name"]:before {
            content: url("../assets/img/profile.png");
            margin-right: 7px;
        }
        label[for="email"]:before {
            content: url("../assets/img/message.png");
            margin-right: 7px;
        }
        input {
            outline: none;
            height: 50px;
            padding: 0px 20px;
            border: 1px solid #c1c1c1;
            border-radius: 4px;
        }
        #message {
            outline: none;
            padding: 20px;
            border: 1px solid #c1c1c1;
            border-radius: 4px;
        }   
        #sendMessage {
            margin: 40px 0px;
            padding: 10px;
            font-size: 25px;
            color: white;
            background-color: black;
            border: 2px solid black;
            border-radius: 2px;
            transition: all 0.4s;
            outline: none;
        } 
        #sendMessage:hover {
            color: black;
            background-color: white;
        }
        #sendMessage:disabled {
            opacity: 0.4;
        }
        .sendResult {
            text-align: center;
        }
    `}</style>
)