declare module "react-native-static-server" {
  type Options = {
    localOnly?: boolean;
    keepAlive?: boolean;
    keystorePassword?: string;
  };

  export default class StaticServer {
    constructor(port: number, root?: string, opts?: Options);

    port: number;
    root: string;
    localOnly: boolean;
    keepAlive: boolean;
    keystorePassword: string;
    started: boolean;
    _origin?: string;

    start: () => Promise<string>;
    stop: () => Promise<any>;
    isRunning: () => Promise<boolean>;
    kill: () => void;
  }
}
