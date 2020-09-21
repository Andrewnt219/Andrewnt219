import { GaCategories } from "@src/constants/ga.constants";
import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { SnackbarContext } from "@src/contexts/Snackbar.context";
import { useClickOutside } from "@src/hooks";
import { useAnalytics } from "@src/hooks/useAnalytic";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import tw, { styled, css } from "twin.macro";

type Props = {
  className?: string;
};

function Email({ className }: Props): ReactElement {
  /* ANCHOR Tracking */
  const { trackEvent } = useAnalytics();

  /* ANCHOR show/hide options */
  const [showOptions, setShowOptions] = useState(false);

  /* ANCHOR click outside */
  const containerRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside(containerRef, () => setShowOptions(false));

  /* ANCHOR Copy */
  const inputRef = useRef<HTMLInputElement | null>(null);
  const emailOptionRef = useRef<HTMLAnchorElement | null>(null);

  const { queueSnackbarMessage } = useContext(SnackbarContext);

  const clickHandler = () => {
    setShowOptions((prevState) => !prevState);

    trackEvent({ action: "Email Clicked", category: GaCategories.Contact });
  };

  // NOTE need to be in useEffect to only trigger AFTER state has updated
  useEffect(() => {
    // NOTE only trigger copy and set focus on initial click
    if (showOptions) {
      /* Copy to clipboard */
      if (inputRef.current) {
        // Execute copy
        inputRef.current.select();
        document.execCommand("copy");

        // Display success message
        queueSnackbarMessage({ message: "Copied to clipboard" });
      } else {
        // Display failure message
        queueSnackbarMessage({ message: "Failed to copy" });
      }

      // NOTE  this should be AFTER copy, because inputRef steal the focus
      // Set focus to opened option
      emailOptionRef.current?.focus();
    }
  }, [showOptions, queueSnackbarMessage]);

  return (
    //   NOTE button because I need to trigger on enter
    <Container
      className={className}
      onClick={clickHandler}
      ref={containerRef}
      // accessibility
      aria-label="Open email options"
      aria-expanded={showOptions}
      role="button"
      tabIndex={0}
      //
      increaseZIndex={showOptions}
    >
      {PersonalInfo.Email}

      <AnimatePresence>
        {showOptions && (
          <EmailOption
            variants={emailOptionsVariants}
            initial="hidden"
            exit="hidden"
            animate="visible"
            //
            href={`mailto:${PersonalInfo.Email}`}
            ref={emailOptionRef}
          >
            Email me
          </EmailOption>
        )}
      </AnimatePresence>

      <HiddenInput
        type="text"
        defaultValue={PersonalInfo.Email}
        ref={inputRef}
        // NOTE readOnly to prevent keyboard pop up on mobile
        readOnly
        //a11y
        aria-hidden={true}
        tabIndex={-1}
      />
    </Container>
  );
}

type ContainerProps = {
  increaseZIndex: boolean;
};
const Container = styled.button<ContainerProps>`
  ${tw`relative`}
  user-select: none;

  ${(p) =>
    p.increaseZIndex &&
    css`
      ${tw`z-20`}
    `}
`;

const emailOptionsVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

type EmailOptionProps = {};
const EmailOption = styled(motion.a)<EmailOptionProps>`
  ${tw`bg-secondary px-4 rounded `}

  position: absolute;
  bottom: -70%;
  left: 0;
  transform: translate(0, 50%);

  line-height: 2;
  color: white;
  font-size: smaller;
  font-weight: normal;
  text-decoration: none;

  :hover,
  :focus {
    outline: none;
    text-decoration: underline;
  }
`;

type HiddenInputProps = {};
const HiddenInput = styled.input<HiddenInputProps>`
  position: fixed;
  left: -9999px;
`;

export { Email };
