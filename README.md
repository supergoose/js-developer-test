# Andrew Sargeant (Developer Test)

## Installation
1. Make sure you have NodeJS installed (I am using version 6.11.2)
2. Clone this repository
3. Open a Terminal / CMD window and CD to the directory which stores the repository
4. Type `npm install` (this may take a minute)
5. Type `node server`
6. Navigate a browser to your localhost port 3000

If you are using Cloud9 IDE like me, you may need to edit the server.js file from:

`.listen( 3000, () => {
	console.log( 'Server running on port 3000...' );
} );`

to:

`.listen( process.env.PORT, process.env.IP, () => {
	console.log( 'Server running on Cloud9 IDE env Port...' );
} );`

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
| 9. CSS boxes                   | 4h 30m |
| 10. Task Runner                | 1h 0m |
| 11. Rewrite JavaScript         | 0h 30m |
| 12. Responsive font size       | 0h 15m |
| 13. Transpile JavaScript       | 2h 0m |
| TOTAL                          | 12h 37m |

## Tools used

* [Cloud9 IDE](http://c9.io/)

## Points of Note

### Task 5 Add Content
I wanted to use JSON and Handlebars straightaway.

Wasn't sure whether the image for "photo" section should take responsive web development into account.

Stipulated "no libraries" - does this include not using the CSS that is currently implemented?

### Task 10: Task Runner 
This asked for me to add my dependencies to the package.json - wasn't sure if 
this meant create an entirely seperate module and register it with NPM or to add to current
package.json.

### Task 13: Transpile JavaScript 
Installing Babel to transpile ES6 JS to ES5 also required installing Browserify to ensure module is accessible to browsers.
Issue discovered: Rephrased `export {ContentInstance}` to `export default` in order to overcome Babel 6 transpilation of import/export for ContentInstance class.

### Task 9: CSS Boxes 
I left until last as I knew this would be one of the most time consuming activities. I have been able to test this on FireFox, Chrome and MS Edge. IE9/10/11 have been tested via the MS Edge emulator.