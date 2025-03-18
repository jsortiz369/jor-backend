import { InvalidValueException } from '../exceptions';

export abstract class StringValueObject<T extends string | undefined | null> {
  readonly _value: T;
  protected constructor(value: T) {
    this._value = value;
  }

  protected ensureNotEmpty(message?: string): void {
    const messageInvalid = message ?? `Value must be not empty`;
    if (this._value === '') throw new InvalidValueException(messageInvalid);
  }

  protected ensureIsDefined(message?: string): void {
    const messageInvalid = message ?? `Value must be defined`;
    if (this._value === null || this._value === undefined) throw new InvalidValueException(messageInvalid);
  }

  protected ensureIsFulfillregExp(regex: RegExp, message?: string): void {
    const messageInvalid = message ?? `Value does not match the the regular expression`;
    if (!regex.test(this._value ?? '')) throw new InvalidValueException(messageInvalid);
  }

  protected lengthString(min: number, max: number, message?: string) {
    const messageInvalid = message ?? `Value must be between ${min} and ${max} characters`;
    if (this.minLength(min) || this.maxLength(max)) throw new InvalidValueException(messageInvalid);
  }

  protected minLengthString(min: number, message?: string) {
    const messageInvalid = message ?? `Value must be at least ${min} characters`;
    if (this.minLength(min)) throw new InvalidValueException(messageInvalid);
  }

  protected maxLengthString(max: number, message?: string) {
    const messageInvalid = message ?? `Value must be at most ${max} characters`;
    if (this.maxLength(max)) throw new InvalidValueException(messageInvalid);
  }

  private minLength(min: number): boolean {
    return this._value !== undefined && this._value !== null && this._value.length < min;
  }

  private maxLength(limit: number): boolean {
    return this._value !== undefined && this._value !== null && this._value?.length > limit;
  }
}
