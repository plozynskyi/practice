import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";
import { useUpdateCommentMutation } from "../../redux/commentApi";

export const Button = ({ children, counter, role = "thumbsUp", id }) => {
  const [updateFeedback, { isLoading }] = useUpdateCommentMutation();

  const variants = {
    [styles.thumbsUp]: role === "thumbsUp",
    [styles.thumbsDown]: role === "thumbsDown",
  };

  const onBtnHandleClick = () => {
    updateFeedback({ id, [role]: counter + 1 });
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type="button"
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {children}

      <span className={styles.counter}>
        <span></span>
        {counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
