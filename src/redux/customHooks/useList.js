import { useDispatch, useSelector } from "react-redux";
import { useCallback,  } from "react";

import { usersSelector } from "../selector";
import { userAction } from "../actions/userAction";

export const useList = () => {
  const dispatch = useDispatch();

  
  const dispatchGetUsers = useCallback(
    () =>dispatch(userAction()),
    [dispatch]
);
  const { loading, users, error } = useSelector(usersSelector);



  return {
    dispatchGetUsers,
    loading, users, error
  
  };
};
