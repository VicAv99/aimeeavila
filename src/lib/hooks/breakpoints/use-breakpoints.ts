import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../../../tailwind.config";
import { create } from "./create";

const config = resolveConfig(tailwindConfig);

export const { useBreakpoint, useBreakpointEffect, useBreakpointValue } =
  create(config.theme?.screens);
