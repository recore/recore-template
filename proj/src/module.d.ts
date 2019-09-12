declare const __mock__: boolean;

declare module '*.vx' {
  const RecoreComponent: React.ComponentClass<{ [key: string]: any }>;
  export default RecoreComponent;
}

declare module '*.svg' {
  const SvgIcon: React.ComponentClass<any>;
  export default SvgIcon;
}
