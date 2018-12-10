// @flow

function findAndReportNewline(context, node, value) {
  const regex = /\n/u;

  if (typeof value === 'string' && regex.test(value)) {
    context.report({
      node,
      message: 'Unexpected newline character (use os.EOL instead).',
    });
  }
}

/*::

type LiteralNode = {
  +value: string,
};

type TemplateLiteralNode = {
  +quasis: $ReadOnlyArray<{
    +value: {
      +raw: string,
      +cooked: string,
    },
  }>,
};

*/

module.exports = {
  meta: {
    type: 'problem',
    schema: [],
  },

  create(context /*: Object */) {
    return {
      // https://astexplorer.net/
      Literal(node /*: LiteralNode */) {
        findAndReportNewline(context, node, node.value);
      },
      TemplateLiteral(node /*: TemplateLiteralNode */) {
        node.quasis.forEach(node => {
          // TODO: ignored for now since this is a bit complicated
        });
      },
    };
  },
};
