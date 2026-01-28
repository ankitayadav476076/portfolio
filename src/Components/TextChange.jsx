import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Ankita"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fullText = texts[index];

      if (!isDeleting) {
        setLength((prev) => prev + 1);
        setCurrentText(fullText.substring(0, length));
        if (length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setLength((prev) => prev - 1);
        setCurrentText(fullText.substring(0, length));
        if (length === 0) {
          setIsDeleting(false);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [length, isDeleting, index]);

  return <span className="inline-block">{currentText}</span>;
};

export default TextChange;