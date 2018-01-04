# Andrew Sargeant (Developer Test)

## Task Time Tracking

| Task                           | Time Taken |
| ------------------------------ | ---------- |
| 2. Your name                   | 0h 5m |
| 3. Edit content                | 0h 2m |
| 4. Replace content             | 0h 30m |
| 5. Add content                 | 1h 0m |
| 6. Modify your new content     | 0h 30m |
| 7. Simplify JavaScript         | 0h 45m |
| 8. Convert CSS to LESS or SASS | 0h 30m |
| 9. CSS boxes                   | |
| 10. Task Runner                | 1h 0m |
| 11. Rewrite JavaScript         | 0h 30m |
| 12. Responsive font size       | 0h 15m |
| 13. Transpile JavaScript       | 3h 0m |
| TOTAL                          | 8h 7m |

## Tools used

* [Cloud9 IDE](http://c9.io/)

## Points of Note

Adding the About Me section - I wanted to use JSON and Handlebars straightaway.

Not sure whether the image for "photo" section should take responsive web development into account.

The Task stipulated "no libraries" - does this include not using the CSS that is currently implemented?

Task 10: Task Runner asked for me to add my dependencies to the package.json - wasn't sure if 
this meant create an entirely seperate module and register it with NPM or to add to current
package.json.

Task 13: Transpile JavaScript - Installing Babel to transpile ES6 JS to ES5 also required installing Browserify to ensure module is accessible to browsers.
Issue discovered: Rephrased `export {ContentInstance}` to `export default` in order to overcome Babel 6 transpilation of import/export for ContentInstance class.