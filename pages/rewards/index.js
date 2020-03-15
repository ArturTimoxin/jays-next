import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import Link from "next/link";
import { maskPhone } from "../../constants/InputMasks";
import BonusesModal from "../../components/BonusesModal";
import API from "../../utils/api";
import { connect } from "react-redux";
import { showMessageModal } from "../../actions/messageModal";
import bonusConditions from '../../constants/bonusConditions';

const Rewards = ({ showMessageModalAction }) => {
  const [phone, setPhone] = useState("");
  const [isLoadingInfo, setLoadingInfo] = useState(false);
  const [isShowBonusesModal, setIsShowBonusesModal] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    bonus: ""
  });
  const [error, setError] = useState("");

  const getBonuses = e => {
    e.preventDefault();
    const shortPhone = e.target.phone.value.replace(/\D/g, "");
    if (!shortPhone.trim().length) {
      setError("Введіть номер телефону");
      return;
    }
    if (shortPhone.trim().length !== 10) {
      setError("Введіть корректний номер телефону");
      return;
    }

    setLoadingInfo(true);
    const phone = `38${shortPhone}`;

    API.get(`/clients/bonus?phone=${phone}`)
      .then(res => {
        setUserData(res.data);
        setLoadingInfo(false);
        toggleShowModal();
      })
      .catch(err => {
        setLoadingInfo(false);
        if (err.response.status === 404) {
          showMessageModalAction({ title: 'Помилка', message: 'Будь ласка перевірте коректність номера телефону, користувача з таким номером телефону не було знайдено або цей аккаунт ще не був перевірений адміністратором.' })
          return;
        }
        setError("Помилка сервера");
      });
  };

  const toggleShowModal = () => {
    setIsShowBonusesModal(!isShowBonusesModal);
  };

  const changePhoneNumber = e => {
    setError("");
    setPhone(e.target.value);
  };

  return (
    <>
      <div className="wrap-rewards">
        <h1 className="title-rewards">Бонуси</h1>
        <h2 className="subtitle-rewards">
          Для того щоб перевірити баланс, введіть ваш номер телефону:
        </h2>
        <form onSubmit={getBonuses} id="bonusesForm">
          <MaskedInput
            type="text"
            required
            mask={maskPhone}
            guide={true}
            showMask={true}
            value={phone}
            name="phone"
            id="phoneBonusesInput"
            onChange={changePhoneNumber}
          />
          <div className="errorText">{error}</div>
          <button type="submit" id="get-balance-btn" disabled={isLoadingInfo}>
            Перевірити баланс
          </button>
          <Link passHref href="/registration">
            <a className="registration-link">
              Зареєструватися в бонусній системі
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
      <BonusesModal
        isShow={isShowBonusesModal}
        firstname={userData.firstname}
        lastname={userData.lastname}
        bonus={userData.bonus}
        toggleShowModal={toggleShowModal}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showMessageModalAction: ({ title, message }) =>
      dispatch(showMessageModal({ title, message }))
  };
};

export default connect(null, mapDispatchToProps)(Rewards);
