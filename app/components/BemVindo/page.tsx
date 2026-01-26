"use client";

import { useState, useEffect } from "react";

export default function BemVindo() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const unmountTimer = setTimeout(() => {
      setVisible(false);
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`bem-vindo-overlay ${fadeOut ? "bem-vindo-overlay--out" : ""}`}
      aria-label="Tela de boas-vindas"
    >
      <div className="bem-vindo-content">
        <h1 className="bem-vindo-title">
          <span className="bem-vindo-word">Bem-vindo</span>
        </h1>
        <p className="bem-vindo-subtitle">ao meu portfólio</p>
      </div>
    </div>
  );
}
