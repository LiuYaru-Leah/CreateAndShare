import { constants } from ".";
import axios from "axios";

const changeBOOKDetail = (title, content) => ({
  type: constants.CHANGE_BOOK_DETAIL,
  title,
  content,
});

export const getbookDetail = (id) => {
  return (dispatch) => {
    axios.get(`/data/bookdetail.json?id=${id}`).then((res) => {
      const result = res.data.data;
      dispatch(changeBOOKDetail(result.title, result.content));
    });
  };
};
