const name = "tian";
export const func = () => {
  return new Promise((resolve, reject) => {
    console.log(name);
    resolve(1);
  });
};
