export const useGetWishBooks = ({ dataName }) => {
  const getData = localStorage.getItem({ dataName });
  return getData ? JSON.parse(getData) : [];
};
