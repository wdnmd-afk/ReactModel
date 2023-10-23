/// <reference types="vite/client" />

declare  module '*.tsx' {
  import {FC} from "react";
  const Component: FC;
  export default Component;
}