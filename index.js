const get = require("lodash.get");

module.exports = {
	rules: {
		"no-inline-styles": {
			create: function (context) {
				return {
					JSXOpeningElement(node) {
						node.attributes.map(attr => {
							const attrName = get(attr, "name.name");
							if (attrName === "style") {
								if (attr.value.expression.properties) {
									attr.value.expression.properties.map(prop => {
									const pn = get(prop, "key.name");
									const pt = get(prop, "value.type");
									if (
										pt === "Literal" &&
		
										
										pn !== undefined
									) {
										context.report(node, prop.loc, "Inline styles are not allowed");
									}
									});
								}
							}
						});
					}
				};
			}
		}
	}
};