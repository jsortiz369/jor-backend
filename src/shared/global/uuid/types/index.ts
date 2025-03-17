export abstract class UuidGlobal {
  abstract generateUuid: () => string;
  abstract validateUuid: (uuid: string) => boolean;
}
