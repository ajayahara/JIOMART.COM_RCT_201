export const Setdata = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const GetData = (key) => {
    try {
      let data = JSON.parse(localStorage.getItem(key));
      return data;
    } catch (error) {
      return undefined;
    }
  };
  
  export const RemoveData = (key) => {
    localStorage.removeItem(key);
  };
  