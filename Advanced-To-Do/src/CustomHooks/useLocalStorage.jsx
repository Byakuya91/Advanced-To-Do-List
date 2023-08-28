import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  //   Declaring state variables
  const [value, setValue] = useState(() => {
    try {
      // checks the value passed in
      const localValue = window.localStorage.getItem(key);
      // checking if the local value exists
      // ? Whatever is sent to local storage is sent as a string. Localstorage uses JSON.
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  //  saving change to local storage
  useEffect(() => {
    //    setting the item
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // ? value and setValue can be applied to any state variables that require local storage

  return [value, setValue];
};

export default useLocalStorage;
