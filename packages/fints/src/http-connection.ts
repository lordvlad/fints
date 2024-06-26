import "isomorphic-fetch";
import { verbose } from "./logger";
import { encodeBase64, decodeBase64 } from "./utils";
import type { Request } from "./request";
import { Response } from "./response";
import type { Connection } from "./types";

/**
 * Configuration specifying how to reach the fints server.
 */
export class ConnectionConfig {
  /**
   * The URL to reach the server at.
   */
  public url: string;
  /**
   * If set to `true`, will log all requests performed and responses received.
   */
  public debug = false;
  /**
   * If set, will use proxy for HTTP calls and set the actual url in TARGET header.
   */
  public proxy?: string;
}

/**
 * A connection used by clients to reach the fints server.
 */
export class HttpConnection extends ConnectionConfig implements Connection {
  constructor(config: ConnectionConfig) {
    super();
    Object.assign(this, config);
  }

  public async send(request: Request): Promise<Response> {
    const { url, proxy, debug } = this;
    verbose(`Sending Request: ${request}`);
    if (debug) verbose(`Parsed Request:\n${request.debugString}`);

    const method = "POST";
    const body = encodeBase64(String(request));
    const headers = { TARGET: url };
    const httpRequest = proxy
      ? await fetch(proxy, { method, body, headers })
      : await fetch(url, { method, body });
    if (!httpRequest.ok) {
      throw new Error(
        `Received bad status code ${httpRequest.status} from FinTS endpoint.`,
      );
    }

    const responseString = decodeBase64(await httpRequest.text());
    verbose(`Received Response: ${responseString}`);
    const response = new Response(responseString);
    if (debug) verbose(`Parsed Response:\n${response.debugString}`);
    return response;
  }
}
