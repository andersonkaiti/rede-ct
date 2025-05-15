import { FlatCompat } from "@eslint/eslintrc";
import importHelpersPlugin from "eslint-plugin-import-helpers";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "import-helpers": importHelpersPlugin,
    },
    rules: {
      "import-helpers/order-imports": [
        "warn",
        {
          groups: [
            ["/^react/", "/^next/"],
            "module",
            "/^types/",
            "/^actions/",
            "/^hooks/",
            "/^components/",
            "/^utils/",
            "/^app/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
    },
  },
];

export default eslintConfig;
