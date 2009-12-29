/*
 * Menu: Zen Coding > Merge Lines
 * Kudos: Sergey Chikuyonok (http://chikuyonok.ru)
 * License: EPL 1.0
 * Key: M4+M
 * DOM: http://download.eclipse.org/technology/dash/update/org.eclipse.eclipsemonkey.lang.javascript
 * 
 * @include "lib/zen_eclipse.js"
 * @include "lib/zen_coding.js"
 * @include "/EclipseMonkey/scripts/monkey-doc.js"
 */

include('zencoding.js');

function main() {
	zen_editor.setContext(editors.activeEditor);
	mergeLines(zen_editor);
}