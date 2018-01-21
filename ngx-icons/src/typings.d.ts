/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// This typing is required in order to make Typescript play well with a
// plain input in the component like
// import Add from '../icons/add.svg';
declare module "*.svg" {
  const content: any;
  export default content;
}
