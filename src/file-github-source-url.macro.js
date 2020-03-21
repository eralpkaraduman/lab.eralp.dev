const { createMacro } = require("babel-plugin-macros");
const { GITHUB_URL } = require("./constants");
const prefix = GITHUB_URL + "/blob/master";

const macro = ({ references, state }) => {
  const fileSourceUrl = state.file.opts.filename.replace(process.cwd(), prefix);
  references.default.forEach(reference => {
    reference.replaceWithSourceString(JSON.stringify(fileSourceUrl));
  });
};

module.exports = createMacro(macro);
