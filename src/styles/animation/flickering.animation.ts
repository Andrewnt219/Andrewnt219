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

export const buttonFlickering = keyframes`
0% {
    border-color: var(--accent-color);
    -webkit-box-shadow: 0 0 5px rgba(67,183,255,.2), inset 0 0 5px rgba(67,183,255,.1), 0 2px 0 #000;
    box-shadow: 0 0 5px rgba(67,183,255,.2), inset 0 0 5px rgba(67,183,255,.1), 0 2px 0 #000;
}
15% {
    border-color: #56beff;
    -webkit-box-shadow: 0 0 10px rgba(67,183,255,.6), inset 0 0 10px rgba(67,183,255,.4), 0 2px 0 #000;
    box-shadow: 0 0 10px rgba(67,183,255,.6), inset 0 0 10px rgba(67,183,255,.4), 0 2px 0 #000;
}
16% {
    border-color: transparent;
    -webkit-box-shadow: 0 0 20px transparent, inset 0 0 10px transparent, 0 2px 0 transparent;
    box-shadow: 0 0 20px transparent, inset 0 0 10px transparent, 0 2px 0 transparent;
}
17% {
    border-color: var(--accent-color);
    -webkit-box-shadow: 0 0 5px rgba(67,183,255,.2), inset 0 0 5px rgba(67,183,255,.1), 0 2px 0 #000;
    box-shadow: 0 0 5px rgba(67,183,255,.2), inset 0 0 5px rgba(67,183,255,.1), 0 2px 0 #000;
}
20% {
    border-color: #56beff;
    -webkit-box-shadow: 0 0 10px rgba(67,183,255,.6), inset 0 0 10px rgba(67,183,255,.4), 0 2px 0 #000;
    box-shadow: 0 0 10px rgba(67,183,255,.6), inset 0 0 10px rgba(67,183,255,.4), 0 2px 0 #000;
}
30% {
    border-color: var(--accent-color);
    -webkit-box-shadow: 0 0 5px rgba(67,183,255,.2), inset 0 0 5px rgba(67,183,255,.1), 0 2px 0 #000;
    box-shadow: 0 0 5px rgba(67,183,255,.2), inset 0 0 5px rgba(67,183,255,.1), 0 2px 0 #000;
}
100% {
    border-color: #56beff;
    -webkit-box-shadow: 0 0 10px rgba(67,183,255,.6), inset 0 0 10px rgba(67,183,255,.4), 0 2px 0 #000;
    box-shadow: 0 0 10px rgba(67,183,255,.6), inset 0 0 10px rgba(67,183,255,.4), 0 2px 0 #000;
}
`;
