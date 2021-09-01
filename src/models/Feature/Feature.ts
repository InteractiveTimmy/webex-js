/**
 * Abstract class for feature sets.
 *
 * @public
 */
abstract class Feature {
  /**
   * Initialize this Feature.
   *
   * @returns - This Feature after initialization.
   */
  public abstract initialize(): Promise<this>
}

export default Feature;
