import React from 'react';
import '../styles/common.css';
import '../styles/sign-in-11-235.css';

/**
 * PUBLIC_INTERFACE
 * SignIn
 * A presentational component that renders the Sign In screen UI from the static HTML/CSS.
 * - Uses assets copied to public/assets/figmaimages
 * - No authentication or backend logic is implemented (UI only)
 * 
 * Ocean Professional theme notes:
 * - Background: #f9fafb
 * - Surface: #ffffff
 * - Primary: #2563EB
 * - Secondary/Accent: #F59E0B
 * 
 * This component relies on absolute positioning consistent with the provided design.
 */
function SignIn() {
  // Helper to resolve public image paths
  const img = (name) => `/assets/figmaimages/${name}`;

  return (
    <div
      className="screen"
      id="screen-11-235"
      style={{
        background: '#f9fafb', // Ocean Professional background
      }}
      aria-label="Sign in screen"
    >
      {/* Status Bar (top) */}
      <div className="abs" style={{ left: 0, top: 0, width: 375, height: 44 }}>
        {/* Time */}
        <div className="abs status-time" style={{ left: 29.5, top: 12, width: 180, height: 22 }}>
          19:27
        </div>
        {/* Battery decorative assets */}
        <img
          className="abs img"
          src={img('figma_image_13_71_128_306.png')}
          alt=""
          style={{ left: 337, top: 1, width: 20, height: 9.5 }}
        />
        <img
          className="abs img"
          src={img('figma_image_13_71_128_307.png')}
          alt=""
          style={{ left: 336, top: 0, width: 22, height: 11.5 }}
        />
      </div>

      {/* Title group */}
      <div className="abs heading-hello" style={{ left: 30, top: 94, width: 84, height: 45 }}>
        Hello,
      </div>
      <div className="abs sub-welcome" style={{ left: 30, top: 139, width: 155, height: 30 }}>
        Welcome Back!
      </div>

      {/* Email Input (decorative as per static design) */}
      <div className="input-wrap" style={{ left: 30, top: 226 }}>
        <div className="input-label" style={{ left: 0, top: 0, width: 38, height: 21 }}>
          Email
        </div>
        <div className="input-rect" style={{ left: 0, top: 26 }} />
        <div className="input-placeholder" style={{ left: 20, top: 45, width: '100%', height: 17 }}>
          Enter Email
        </div>
      </div>

      {/* Password Input */}
      <div className="input-wrap" style={{ left: 30, top: 337 }}>
        <div className="input-label" style={{ left: 0, top: 0, width: 107, height: 21 }}>
          Enter Password
        </div>
        <div className="input-rect" style={{ left: 0, top: 26 }} />
        <div className="input-placeholder" style={{ left: 20, top: 45, width: '100%', height: 17 }}>
          Enter Password
        </div>
      </div>

      {/* Forgot Password */}
      <div className="abs forgot" style={{ left: 40, top: 538, width: 140, height: 17, color: '#F59E0B' }}>
        Forgot Password?
      </div>

      {/* Or Sign in With lines and label */}
      <div className="abs" style={{ left: 90, top: 660, width: 195, height: 17 }}>
        <div className="abs hairline" style={{ left: 0, top: 9, width: 50 }} />
        <div className="abs or-with" style={{ left: 57, top: 0, width: 120, height: 17 }}>
          Or Sign in With
        </div>
        <div className="abs hairline" style={{ left: 145, top: 9, width: 50 }} />
      </div>

      {/* Social Buttons */}
      <button
        className="abs btn circle-btn"
        id="btn-google"
        style={{ left: 131, top: 697, width: 44, height: 44 }}
        aria-label="Sign in with Google"
        type="button"
      >
        <img
          className="img"
          src={img('figma_image_13_36.png')}
          alt=""
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            boxShadow: 'var(--shadow-0)',
          }}
        />
        <img
          className="abs img"
          src={img('figma_image_13_39.png')}
          alt="Google"
          style={{ left: 12, top: 12, width: 20, height: 20 }}
        />
        <img
          className="abs img"
          src={img('figma_image_13_42.png')}
          alt=""
          style={{ left: 22, top: 20, width: 10, height: 9.41 }}
        />
      </button>

      {/* Facebook */}
      <button
        className="abs btn circle-btn"
        id="btn-facebook"
        style={{ left: 200, top: 697, width: 44, height: 44 }}
        aria-label="Sign in with Facebook"
        type="button"
      >
        <img
          className="abs img"
          src={img('figma_image_13_61.png')}
          alt="Facebook"
          style={{ left: 10, top: 10, width: 20, height: 20 }}
        />
      </button>

      {/* Big Sign In Button */}
      <button
        className="abs btn big-button"
        id="btn-signin"
        style={{
          left: 30,
          top: 610,
          width: 315,
          height: 60,
          background: '#2563EB', // Ocean Professional primary
        }}
        aria-label="Sign in"
        type="button"
      >
        <span className="label">Sign In</span>
        <img className="icon img" src={img('figma_image_54_668_53_625.png')} alt="arrow right" />
      </button>

      {/* Bottom text */}
      <div className="abs signup-link" style={{ left: 75, top: 786, width: 220, height: 17 }}>
        Don’t have an account? Sign up
      </div>

      {/* Home Indicator */}
      <div className="abs" style={{ left: 120, top: 773, width: 135, height: 5 }}>
        <div className="home-indicator" />
      </div>
    </div>
  );
}

export default SignIn;
