/// <reference types="vite/client" />

declare module "*.jsx" {
  const component: any;
  export default component;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
