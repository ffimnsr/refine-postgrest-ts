import { PostgrestClient } from "@supabase/postgrest-js";
import type { Fetch } from "@supabase/postgrest-js/dist/cjs/types";

export * from "./utils/index.js";
export * from "./dataProvider/index.js";

export type PostgrestClientOptions<SchemaName> = {
  headers?: Record<string, string>;
  schema?: SchemaName;
  fetch?: Fetch;
};

export const createClient = <
  Database = any,
  SchemaName extends string & keyof Database = "public" extends keyof Database
    ? "public"
    : string & keyof Database,
>(
  postgrestUrl: string,
  options?: PostgrestClientOptions<SchemaName>,
): PostgrestClient<Database, SchemaName, any> => {
  return new PostgrestClient<Database, SchemaName, any>(postgrestUrl, options);
};
