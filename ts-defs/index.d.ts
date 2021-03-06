import { Program } from 'estree';

export interface AcornOptions {
    ecmaVersion?: number;
    sourceType?: "script" | "module";
    onInsertedSemicolon?: Function;
    onTrailingComma?: Function;
    allowReserved?: boolean;
    allowReturnOutsideFunction?: boolean;
    allowImportExportEverywhere?: boolean;
    allowAwaitOutsideFunction?: boolean;
    allowHashBang?: boolean;
    locations?: boolean;
    onToken?: Function;
    onComment?: Function;
    ranges?: boolean;
    preserveParens?: boolean;
}

export function parse (input: string, options?: AcornOptions): Program;
