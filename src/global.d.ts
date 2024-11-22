// src/global.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

// Add webpack require.context type
declare interface NodeRequire {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => any;
}

declare interface WebpackContext {
  keys(): string[];
  (key: string): string;
  <T>(key: string): T;
}

declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys: () => string[];
    (key: string): string;
  };
};
