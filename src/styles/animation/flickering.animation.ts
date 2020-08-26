import { keyframes } from "styled-components";

export const flickering = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 0;
    }
    10.1% {
        opacity: 1;
    }
    10.2% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    20.1% {
        opacity: 1;
    }
    20.6% {
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    30.1% {
        opacity: 1;
    }
    30.5% {
        opacity: 1;
    }
    30.6% {
        opacity: 0;
    }
    45% {
        opacity: 0;
    }
    45.1% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    55% {
        opacity: 1;
    }
    55.1% {
        opacity: 0;
    }
    57% {
        opacity: 0;
    }
    57.1% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    60.1% {
        opacity: 0;
    }
    65% {
        opacity: 0;
    }
    65.1% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    75.1% {
        opacity: 0;
    }
    77% {
        opacity: 0;
    }
    77.1% {
        opacity: 1;
    }
    85% {
        opacity: 1;
    }
    85.1% {
        opacity: 0;
    }
    86% {
        opacity: 0;
    }
    86.1% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`;

/**
 * @param shadow_1 css variable shadow-1
 * @param shadow_2 css variable shadow-2
 */
export const buttonFlickering = keyframes`
0% {border-color: var(--accent-color);
    box-shadow: var(--shadow-1);
}
15% {
    border-color: #56beff;
    box-shadow: var(--shadow-2);
}
16% {
    border-color: transparent;
    box-shadow: 0 0 2rem transparent, inset 0 0 1rem transparent, 0 .2rem 0 transparent;
}
17% {
    border-color: var(--accent-color);
    box-shadow: var(--shadow-1);
}
20% {
    border-color: #56beff;
    box-shadow: var(--shadow-2);
}
30% {
    border-color: var(--accent-color);
    box-shadow: var(--shadow-1);
}
100% {
    border-color: #56beff;
    box-shadow: var(--shadow-2);
}
`;
