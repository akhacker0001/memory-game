export const settings = {
    getplayerName() {
      return sessionStorage.getItem("playerName") || ""
    },
    setplayerName(name) {
      sessionStorage.setItem("playerName", name);
    },
    getnumImages() {
      return parseInt(sessionStorage.getItem("numImages")) || 0;
    },
    setnumImages(num) {
      sessionStorage.setItem("numImages", num.toString());
    }
  };
  