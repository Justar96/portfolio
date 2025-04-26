"use client"

export default function Scanlines() {
  return (
    <>
      <div className="scanlines vertical"></div>
      <div className="scanlines"></div>

      <style jsx>{`
        .scanlines {
          z-index: 5;
          pointer-events: none;
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0%;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 1px,
            rgba(12, 31, 39, 0.40) 1px,
            rgba(12, 31, 39, 0.50) 2px
          );
          image-rendering: pixelated;
        }
        
        .scanlines.vertical {
          background: repeating-linear-gradient(
            to right,
            transparent 0px,
            transparent 1px,
            rgba(12, 31, 39, 0.40) 1px,
            rgba(12, 31, 39, 0.50) 2px
          );
          image-rendering: pixelated;
        }
        
        @media screen and (max-width: 768px) {
          .scanlines.vertical {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
