import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
export default function (SpecificComponent, option, adminRoute = null) {
  //option: null 아무나 접근가능 페이지, true 로그인한 유저만 접근 가능, false 로그인한 유저 접근 불가
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
          //로그인되지 않음
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) props.history.push("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
