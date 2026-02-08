import { useState } from "react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: "2em",
    border: "1px solid #333",
    borderRadius: "4px",
    overflow: "hidden",
  },
  copyBtn: {
    color: "white",
    position: "absolute",
    right: "10px",
    top: "10px",
    fontSize: "1.2em",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    zIndex: 10,
  },
  highlighterCustom: {
    margin: 0,
    padding: "1em",
    backgroundColor: "#1d1f21",
  },
};

export default function CodeBlock({ code, language }) {
  const [copyOk, setCopyOk] = useState(false);

  const icon = copyOk ? "fa-check-square" : "fa-copy";

  const handleClick = (e) => {
    navigator.clipboard.writeText(code);
    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.copyBtn} onClick={handleClick}>
        <i className={`fas ${icon}`} style={{ color: "#ddd" }} />
      </div>

      <SyntaxHighlighter
        wrapLongLines
        language={language}
        style={anOldHope}
        customStyle={styles.highlighterCustom}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
