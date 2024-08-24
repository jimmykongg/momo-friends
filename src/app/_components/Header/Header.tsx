"use client";
import React from "react";
import { Home, AlignJustify } from "react-feather";
import { VisuallyHidden } from "@reach/visually-hidden";

import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

function Header({ initialTheme }: { initialTheme: string }) {
  function handleRedirect() {}

  return (
    <header className={styles.header}>
      <ButtonWrapper onClick={handleRedirect}>
        <AlignJustify
          size="2rem"
          color="hsl(190deg 5% 80%)"
          aria-hidden={true}
        />
        <VisuallyHidden>A button to expand the navigation menu</VisuallyHidden>
      </ButtonWrapper>

      <ButtonWrapper onClick={handleRedirect}>
        <Home
          size="1.8rem"
          color="hsl(190deg 5% 80%)"
          style={{ marginBottom: "4px" }}
          aria-hidden={true}
        />
        <VisuallyHidden>A button to return to homepage</VisuallyHidden>
      </ButtonWrapper>

      <div className={styles.searchBarWrapper}>
        <input
          type="search"
          placeholder="Type something here"
          className={styles.searchBar}
        />
      </div>

      <ThemeToggle initialTheme={initialTheme} />
    </header>
  );
}

export default Header;

