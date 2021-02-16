import React from "react";

const Loader = () => {
    return (
        <svg className="c-loader__icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(36 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(72 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(108 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(144 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(180 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(216 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(252 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(288 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(324 50 50)">
        <rect x="49" y="33" rx="0.96" ry="0.96" width="2" height="8" fill="#ff6566">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
        </rect>
        </g>
    </svg>
    );
}
export default Loader;