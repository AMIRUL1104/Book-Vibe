import { useContext } from "react";
import { WishListContext } from "../WishListContext";

function ListedBooks() {
  // const { wishbooks } = useContext(WishListContext);
  const { wishBooks } = useContext(WishListContext);
  console.log(wishBooks);

  return <div>ListedBooks</div>;
}

export default ListedBooks;
