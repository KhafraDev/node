import { AsyncWrapBinding } from './async_wrap';
import { BlobBinding } from './blob';
import { ConfigBinding } from './config';
import { ConstantsBinding } from './constants';
import { FsBinding } from './fs';
import { HttpParserBinding } from './http_parser'
import { MessagingBinding } from './messaging';
import { OptionsBinding } from './options';
import { OsBinding } from './os';
import { SerdesBinding } from './serdes';
import { SymbolsBinding } from './symbols';
import { TimersBinding } from './timers';
import { TypesBinding } from './types';
import { UtilBinding } from './util';
import { WorkerBinding } from './worker';

interface InternalBindingMap {
  async_wrap: AsyncWrapBinding,
  blob: BlobBinding,
  config: ConfigBinding,
  constants: ConstantsBinding,
  fs: FsBinding,
  http_parser: HttpParserBinding,
  messaging: MessagingBinding,
  options: OptionsBinding,
  os: OsBinding,
  serdes: SerdesBinding,
  symbols: SymbolsBinding,
  timers: TimersBinding,
  types: TypesBinding,
  util: UtilBinding,
  worker: WorkerBinding,
}

export declare function internalBinding<T extends keyof InternalBindingMap>(key: T): InternalBindingMap[T];
