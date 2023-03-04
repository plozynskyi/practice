import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import styles from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </div>
    </div>
  );
};
