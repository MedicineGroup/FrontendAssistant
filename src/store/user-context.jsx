/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_ROUTES } from "../utils/routes";
import { useMutation } from "@tanstack/react-query";

const UserDataContext = createContext(undefined);

export function useUserDataContext() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error(
      "useUserDataContext must be used with a UserDataContextProvider"
    );
  }
  return {
    userData: context.userData,
    setUserData: context.setUserData,
    updateInfos: context.updateInfos,
    loading: context.loading,
    errors: context.errors,
    updateSuccess: context.updateSuccess,
    updateUserProfileImage: context.updateUserProfileImage,
  };
}

const updateInfosMutation = async (data) => {
  const authToken = localStorage.getItem("token");
  return axios.post(
    `${import.meta.env.VITE_API_URL}${API_ROUTES.UpdateUserInfos}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
};

const updateUserProfileImageMutation = async (data) => {
  const authToken = localStorage.getItem("token");
  return axios.post(
    `${import.meta.env.VITE_API_URL}${API_ROUTES.UpdateUserProfileImage}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
};

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState();
  const [loading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data !== undefined && data !== null) {
      setUserData(JSON.parse(data));
    }
  }, []);
  
  const mutationUpdateInfos = useMutation({
    mutationFn: updateInfosMutation,
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data.data.assistant));
      setUserData(data.data.assistant);
      setIsLoading(false);
      setUpdateSuccess(true);
    },
    onError: (error) => {
      setErrors({
        updateInfosErrors:
          error.response.data.message || "Something went wrong!",
      });
      setIsLoading(false);
    },
  });

  const mutationUpdateUserProfile = useMutation({
    mutationFn: updateUserProfileImageMutation,
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data.data.assistant));
      setUserData(data.data.assistant);
      setIsLoading(false);
      setUpdateSuccess(true);
    },
    onError: (error) => {
      setErrors({
        updateProfileErrors:
          error.response.data.message || "Something went wrong!",
      });
      setIsLoading(false);
    },
  });

  const updateInfos = async (data) => {
    await mutationUpdateInfos.mutateAsync(data);
  };

  const updateUserProfileImage = async (data) => {
    await mutationUpdateUserProfile.mutateAsync(data);
  };

  useEffect(() => {
    if (mutationUpdateInfos.isPending || mutationUpdateUserProfile.isPending) {
      setIsLoading(true);
    }
  }, [mutationUpdateInfos.isPending, mutationUpdateUserProfile.isPending]);

  const setUser = (data) => {
    try {
      if (!data) {
        throw new Error("User infos mustn't be null");
      }
      setUserData(data);
    } catch (err) {
      setErrors({ message: err.message });
    }
  };

  const value = {
    userData,
    setUserData: setUser,
    updateInfos,
    loading,
    errors,
    updateSuccess,
    updateUserProfileImage,
  };
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}
