"use client";
import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { VisuallyHidden } from "@reach/visually-hidden";

import ButtonWrapper from "@/_components/ButtonWrapper/ButtonWrapper";
import SunIcon from "@/_components/Header/SunIcon";
import MoonIcon from "@/_components/Header/MoonIcon";
import ShiftBy from "@/_components/ShiftBy/ShiftBy";

import { setThemeCookie } from "@/_lib/actions";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

function ThemeToggle({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = useState(initialTheme);
  const ref = useRef<HTMLButtonElement>(null);

  async function handleClick() {
    if (!ref.current) return;

    const nextTheme = theme === "light" ? "dark" : "light";

    await (document as any).startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    }).ready;

    const { top, left } = ref.current.getBoundingClientRect();
    const { x, y, maxRadius } = getViewportPos(top, left);

    const root = document.documentElement;

    root.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    await setThemeCookie("color-theme", nextTheme, "/");

    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    root.setAttribute("data-color-theme", nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <ButtonWrapper onClick={handleClick} innerRef={ref}>
      {theme === "light" ? (
        <ShiftBy y={1}>
          <MoonIcon aria-hidden={true} />
        </ShiftBy>
      ) : (
        <SunIcon aria-hidden={true} />
      )}
      <VisuallyHidden>Toggle dark or light mode</VisuallyHidden>
    </ButtonWrapper>
  );
}

function getViewportPos(top: number, left: number) {
  const x = left;
  const y = top;
  const right = window.innerWidth - left;
  const bottom = window.innerHeight - top;
  const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

  return { x, y, maxRadius };
}

export default ThemeToggle;

