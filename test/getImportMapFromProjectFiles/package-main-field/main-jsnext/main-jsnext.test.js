import { assert } from "@jsenv/assert"
import { resolveUrl } from "@jsenv/util"
import { getImportMapFromProjectFiles } from "@jsenv/node-module-import-map"

const testDirectoryUrl = resolveUrl("./root/", import.meta.url)

const actual = await getImportMapFromProjectFiles({
  projectDirectoryUrl: testDirectoryUrl,
  jsFiles: false,
})
const expected = {
  imports: {
    "main-jsnext": "./node_modules/main-jsnext/jsnext.js",
    "root": "./index",
  },
  scopes: {},
}
assert({ actual, expected })
