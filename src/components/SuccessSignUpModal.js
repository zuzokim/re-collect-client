import React, { useEffect } from "react";
import {
  IsValidateEmail,
  IsValidiateUsername,
  IsValidiatePassword,
} from "../util/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SuccessSignUpModal(props) {
  return (
    <div className="modalWrapper">
      <div className="successSignupModal">
        <div
          className="closeBtn"
          onClick={() => {
            props.setModalMode("");
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="logo"> Recollect </div>
        <p>
          환영합니다 <br /> 가입이 완료되었습니다
        </p>
        <button
          onClick={() => {
            props.setModalMode("login");
          }}
        >
          로그인하고 시작하기
        </button>
      </div>
    </div>
  );
}

export default SuccessSignUpModal;
