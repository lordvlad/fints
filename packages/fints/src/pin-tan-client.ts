import { Client } from "./client";
import { Dialog, type DialogConfig } from "./dialog";
import { Request } from "./request";
import { HttpConnection } from "./http-connection";
import type { Segment } from "./segments";
import type { Connection } from "./types";
import { PRODUCT_NAME } from "./constants";

/**
 * Set of options needed to construct a `PinTanClient`.
 */
export interface PinTanClientConfig {
  /**
   * The fints product identification.
   */
  productId?: string;
  /**
   * The banks identification number (Bankleitzahl).
   */
  blz: string;
  /**
   * The username or identification number.
   */
  name: string;
  /**
   * The pin code or password used for authenticating with the fints server.
   */
  pin: string;
  /**
   * The URL to reach the server at.
   */
  url: string;
  /**
   * If set to `true`, will log all requests performed and responses received.
   */
  debug?: boolean;
  /**
   * If set, will use proxy for HTTP calls and set the actual url in TARGET header.
   */
  proxy?: string;
}

export class PinTanClient extends Client {
  /**
   * Connection used to reach the server.
   */
  private connection: Connection;
  /**
   * Configuration for connecting and authenticating.
   */
  protected config: PinTanClientConfig;

  constructor(config: PinTanClientConfig) {
    super();
    this.config = config;
    const { url, debug, proxy } = config;
    this.connection = new HttpConnection({ url, debug, proxy });
  }

  public createDialog(dialogConfig?: DialogConfig) {
    const { blz, name, pin, productId = PRODUCT_NAME } = this.config;
    const { connection } = this;
    return new Dialog(
      dialogConfig
        ? dialogConfig
        : { blz, name, pin, systemId: "0", productId },
      connection,
    );
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  public createRequest(dialog: Dialog, segments: Segment<any>[], tan?: string) {
    const { blz, name, pin } = this.config;
    const { systemId, dialogId, msgNo, tanMethods } = dialog;
    return new Request({
      blz,
      name,
      pin,
      systemId,
      dialogId,
      msgNo,
      segments,
      tanMethods,
      tan,
    });
  }
}
