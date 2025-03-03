// src/components/LoadingPage.js

import React from "react";

export default function LoadingPage() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ccccff", // Same as v0 background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          color: "purple",
          fontSize: "24px",
          textShadow: "2px 2px pink",
          marginBottom: "20px",
          animation: "blink 1s steps(5, start) infinite",
        }}
      >
        Loading Fan SoundZzz...
      </div>

      <div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #9999cc",
          borderTopColor: "purple",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <p
        style={{
          marginTop: "20px",
          color: "navy",
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        }}
      >
        Please wait while we tune your fan...
      </p>

      <style jsx global>{`
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
