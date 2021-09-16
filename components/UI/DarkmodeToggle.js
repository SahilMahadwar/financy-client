import React from "react";

import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkmodeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {colorMode === "light" ? (
        <IconButton
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={<MoonIcon />}
        />
      ) : (
        <IconButton
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={<SunIcon />}
        />
      )}
    </div>
  );
};

export default DarkmodeToggle;
