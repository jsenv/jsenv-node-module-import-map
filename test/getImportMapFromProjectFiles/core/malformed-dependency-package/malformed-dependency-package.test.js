import { assert } from "@jsenv/assert"
import { resolveUrl } from "@jsenv/util"
import { getImportMapFromProjectFiles } from "@jsenv/node-module-import-map"

const testDirectoryUrl = resolveUrl("./root/", import.meta.url)

const warnings = []
const importMap = await getImportMapFromProjectFiles({
  logLevel: "off",
  projectDirectoryUrl: testDirectoryUrl,
  onWarn: (warning) => {
    warnings.push(warning)
  },
})
const actual = {
  warnings,
  importMap,
}
const expected = {
  warnings: [],
  importMap: {
    imports: {},
    scopes: {},
  },
}
assert({ actual, expected })
