import Image from "next/image";

import { VisuallyHidden } from "@reach/visually-hidden";

export default function Home() {
  return (
    <>
      <button>
        Hello world
        <VisuallyHidden>A welcome message</VisuallyHidden>
      </button>

      <p
        style={{
          fontSize: "3rem",
          fontWeight: "400",
        }}
      >
        Hello world!
      </p>
    </>
  );
}

