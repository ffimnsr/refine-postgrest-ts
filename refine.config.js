/** @type {import('@refinedev/cli').RefineConfig} */
module.exports = {
  group: "Data Provider",
  swizzle: {
    items: [
      {
        group: "Providers",
        label: "PostgREST",
        requiredPackages: ["@supabase/postgrest-js@2.7.0"],
        files: [
          {
            src: "./src/index.ts",
            dest: "./providers/postgrest/index.ts",
          },
          {
            src: "./src/dataProvider/index.ts",
            dest: "./providers/postgrest/dataProvider/index.ts",
          },
          {
            src: "./src/utils/index.ts",
            dest: "./providers/postgrest/utils/index.ts",
          },
          {
            src: "./src/utils/generateFilter.ts",
            dest: "./providers/postgrest/utils/generateFilter.ts",
          },
          {
            src: "./src/utils/handleError.ts",
            dest: "./providers/postgrest/utils/handleError.ts",
          },
          {
            src: "./src/utils/mapOperator.ts",
            dest: "./providers/postgrest/utils/mapOperator.ts",
          },
        ],
        message: `
                    **\`Usage\`**

                    \`\`\`
                    // title: App.tsx
                    import { dataProvider, createClient } from "providers/postgrest";

                    const postgrestClient = createClient("POSTGREST_INSTANCE_URL");

                    const App = () => {
                        return (
                            <Refine
                                dataProvider={dataProvider(postgrestClient)}
                                /* ... */
                            />
                        );
                    }
                    \`\`\`
                    `,
      },
    ],
  },
};
