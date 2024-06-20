import { useEffect } from "react";

export default function useKey(callback) {
  useEffect(
    function () {
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [callback]
  );
}
