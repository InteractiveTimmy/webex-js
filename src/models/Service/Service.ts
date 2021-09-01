/**
 * Abstract Service class.
 *
 * @public
 */
abstract class Service {
  /**
   * Stores the URI for this Service.
   */
  public uri: string;

  /**
   * Handles HTTP `DELETE` requests.
   */
  public abstract delete(): Promise<string>

  /**
   * Handles HTTP `DELETE` requests.
   */
  public abstract get(): Promise<string>

  /**
   * Handles HTTP `DELETE` requests.
   */
  public abstract patch(): Promise<string>

  /**
   * Handles HTTP `DELETE` requests.
   */
  public abstract post(): Promise<string>

  /**
   * Handles HTTP `DELETE` requests.
   */
  public abstract put(): Promise<string>

  /**
   * Handles WebSocket connect requests.
   */
  public abstract connect(): Promise<string>

  /**
   * Handles WebSocket disconnect requests.
   */
  public abstract disconnect(): Promise<string>

  /**
   * Serializes this service.
   */
  public abstract seralize(): string;
}

export default Service;
