import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/filterSlice";

export const Comments = () => {
  const { data: comments, isLoading, isError, isSuccess } = useGetCommentsQuery();
  console.log(comments);

  const filter = useSelector(getFilter);
  console.log(filter);

  return <Grid>{isSuccess && comments.map((comment) => <Comment key={comment.id} {...comment} />)}</Grid>;
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
