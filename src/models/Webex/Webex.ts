import Feature from '../Feature';
import Service from '../Service';

/**
 * The Webex class.
 *
 * @public
 */
class Webex {
  /**
   * The provided configuration object.
   */
  protected config: Record<string, string>;

  /**
   * Stores the list of loaded plugins.
   */
  protected features: Record<string, Feature>;

  /**
   * Stores the list of discovered services.
   */
  protected services: Record<string, Service>;

  /**
   * Stores the associated HTTP tooling.
   */
  public request: string;

  /**
   * Stores the associated WebSocket tooling.
   */
  public socket: string;

  /**
   * Construct a new Webex instance.
   *
   * @param config - The configuration object.
   */
  public constructor(config: Record<string, string>) {
    this.config = config;

    this.features = {};
    this.services = {};

    // This should initialize the Request property.
    // This should initialize the Socket property.
  }

  /**
   * Initialize this instance of Webex.
   *
   * @returns - This instance of Webex after initialization.
   */
  public initialize(): Promise<this> {
    // This should handle authorization initialization.
    // This should handle service initialization.
    // This should handle identity initialization.
    // This should iterate over all loaded features and initialize them.
    return Promise.resolve(this);
  }

  /**
   * Load a list of features into this Webex instance.
   *
   * @returns - This Webex instance.
   */
  public load(): Promise<this> {
    return Promise.resolve(this);
  }

  /**
   * Unload a list of features from this Webex instance.
   *
   * @returns - This Webex instance.
   */
  public unload(): Promise<this> {
    return Promise.resolve(this);
  }
}

export default Webex;
