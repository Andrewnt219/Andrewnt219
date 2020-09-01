import { KeyCode } from "@src/constants/keyCode.constants";
import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { SnackbarContext } from "@src/contexts/Snackbar.context";
import { useClickOutside } from "@src/hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, {
  KeyboardEvent,
  ReactElement,
  useContext,
  useRef,
  useState,
} from "react";
import tw, { styled } from "twin.macro";

type Props = {
  className?: string;
};

function Email({ className }: Props): ReactElement {
  /* SECTION show/hide options */
  const [showOptions, setShowOptions] = useState(false);

  /* click outside */
  const containerRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside(containerRef, () => setShowOptions(false));

  const clickHandler = () => {
    setShowOptions((prevState) => !prevState);
  };
  /* !SECTION show/hide options */

  /* SECTION Copy */
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { displaySnackbar } = useContext(SnackbarContext);

  // TODO prevent keyboard popup on mobile
  const onCopyButtonClicked = (): void => {
    if (inputRef.current) {
      // Execute copy
      inputRef.current.select();
      document.execCommand("copy");

      // Display success message
      displaySnackbar("Copied to clipboard");
    } else {
      // Display failure message
      displaySnackbar("Failed to copy");
    }
  };

  const onCopyButtonPressed = (e: KeyboardEvent<HTMLSpanElement>): void => {
    if (e.keyCode === KeyCode.Enter) {
      onCopyButtonClicked();
      //   NOTE don't put this in click event, it conflicts with container click event
      setShowOptions(false);
    }
  };
  /* !SECTION Copy */

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
    >
      {PersonalInfo.Email}

      <AnimatePresence>
        {showOptions && (
          <EmailOptions
            variants={emailOptionsVariants}
            initial="hidden"
            exit="hidden"
            animate="visible"
          >
            <EmailOption>
              {/* NOTE cannot nested button */}
              <span
                onClick={onCopyButtonClicked}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => onCopyButtonPressed(e)}
              >
                Copy
              </span>
            </EmailOption>
            <EmailOption>
              <a href={`mailto:${PersonalInfo.Email}`}>Send</a>
            </EmailOption>
          </EmailOptions>
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

type ContainerProps = {};
const Container = styled.button<ContainerProps>`
  ${tw`relative`}
  user-select: none;
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
type EmailOptionsProps = {};
const EmailOptions = styled(motion.ul)<EmailOptionsProps>`
  ${tw`flex w-full overflow-hidden border-2 border-white bg-secondary`}
  position: absolute;
  bottom: -70%;
  left: 50%;
  transform: translate(-50%, 50%);

  border-radius: inherit;

  & > :not(:last-child) {
    ${tw`border-r-2 border-white`}
  }
`;

type EmailOptionProps = {};
const EmailOption = styled.li<EmailOptionProps>`
  ${tw` flex justify-center items-center w-full  h-full`}
  flex: 1;
  line-height: 1.6;

  * {
    color: white;

    :hover,
    :focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

type HiddenInputProps = {};
const HiddenInput = styled.input<HiddenInputProps>`
  position: fixed;
  left: -9999px;
`;

export { Email };
