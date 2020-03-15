import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import Link from "next/link";
import { maskPhone } from "../../constants/InputMasks";
import API from "../../utils/api";
import { connect } from "react-redux";
import { showMessageModal } from "../../actions/messageModal";
import bonusConditions from '../../constants/bonusConditions';

const successRegistrationMessage = 
`<div>Ви з'явитеся в бонусній системі після перевірки заявки адміністратором. Зазвичай ми перевіряємо заявки протягом 24 годин. Після проходження реєстрації ви будете сповіщені повідомленням на електронну пошту. <br /><br />
При наступних відвідуваннях наших кав'ярень скажіть баріста свій номер телефону для того щоб вам нараховувались бонуси у вигляді 7% від вартості покупки. <br /><br />
Вдалого дня :)</div>`;

const Registration = ({ showMessageModalAction }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const sendRegistrationData = e => {
    e.preventDefault();
    const shortPhone = e.target.phone.value.replace(/\D/g, "");
    if (!shortPhone.trim().length) {
      setPhoneError("Введіть номер телефону");
      return;
    }
    if (shortPhone.trim().length !== 10) {
      setPhoneError("Введіть корректний номер телефону");
      return;
    }
    setLoading(true);
    const phone = `38${shortPhone}`;

    API.post("/clients/new", {
      name,
      surname,
      birthday,
      email,
      phone
    })
      .then(res => {
        setLoading(false);
        setName("");
        setSurname("");
        setBirthday("");
        setEmail("");
        setPhone("");
        showMessageModalAction({ title: 'Дякуємо за реєстрацію!', message: successRegistrationMessage });
      })
      .catch(err => {
        setLoading(false);
        if(err.response.status === 409) {
          showMessageModalAction({ title: 'Помилка', message: 'За цим номером телефону ви вже були зареєстровані в системі.' });
          return;
        }
      });
  };

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear() - 5;
    const currentDate = yyyy + "-" + dd + "-" + mm;
    return currentDate;
  };

  const changePhone = e => {
    setPhoneError("");
    setPhone(e.target.value);
  };

  return (
    <>
      <div className="wrap-registration">
        <h1 className="title-registration">
          Реєстрація в бонусній системі JAYS
        </h1>
        <form onSubmit={sendRegistrationData} id="registrationForm">
          <label htmlFor="nameInput">Ваше Ім'я:</label>
          <input
            type="text"
            name="name"
            value={name}
            id="nameInput"
            className="registration-input"
            required
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="surnameInput">Ваше Прізвище:</label>
          <input
            type="text"
            name="surname"
            value={surname}
            id="surnameInput"
            className="registration-input"
            required
            onChange={e => setSurname(e.target.value)}
          />
          <label htmlFor="birthdayInput">Ваша дата народження:</label>
          <input
            type="date"
            value={birthday}
            id="birthdayInput"
            className="registration-input"
            name="birthday"
            onChange={e => setBirthday(e.target.value)}
            max={getCurrentDate()}
            required
          />
          <label htmlFor="emailInput">Вашa Email адреса:</label>
          <input
            type="email"
            value={email}
            id="emailInput"
            className="registration-input"
            name="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="phoneInput">Ваш номер мобільного телефону:</label>
          <MaskedInput
            type="text"
            required
            mask={maskPhone}
            guide={true}
            showMask={true}
            value={phone}
            name="phone"
            id="phoneInput"
            className="registration-input"
            onChange={changePhone}
          />
          <div className="phoneError">{phoneError}</div>
          <button type="submit" id="registerSubmitBtn" disabled={isLoading}>
            Зареєструватися
          </button>
          <Link passHref href="/rewards">
            <a className="rewards-link">
              Отримати баланс бонусів за номером телефону
            </a>
          </Link>
          <div 
            className='bonusConditions-link'
            onClick={() => showMessageModalAction({ title: 'Умови участі у бонусній програмі Jays : Rewards', message: bonusConditions })}
          >
              Умови участі
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showMessageModalAction: ({ title, message }) =>
      dispatch(showMessageModal({ title, message }))
  };
};

export default connect(null, mapDispatchToProps)(Registration);
