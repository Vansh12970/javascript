console.log ("Vansh")
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
     console.log(color)
    }
    return randomColor()
  };
  randomColor()
  //copilot-debug

/*
  type:
Represents the type of event (e.g., "click", "keydown", "mousemove").

timestamp:
The time at which the event was created (typically in milliseconds since the epoch).

defaultPrevented:
A boolean indicating whether event.preventDefault() was called to prevent the default action of the event.

target:
The element on which the event occurred (where the event was originally dispatched).

toElement (deprecated):
The element toward which the pointing device is moving (used mainly for mouse events like mouseover and mouseout).

srcElement (deprecated):
An alias for target, used in older versions of Internet Explorer.

currentTarget:
The element to which the event handler is attached (useful when event delegation is involved).

clientX:
The horizontal coordinate of the mouse pointer in the viewport when the event occurred.

clientY:
The vertical coordinate of the mouse pointer in the viewport when the event occurred.

screenX:
The horizontal coordinate of the mouse pointer relative to the screen when the event occurred.

screenY:
The vertical coordinate of the mouse pointer relative to the screen when the event occurred.

altKey:
A boolean indicating whether the Alt key was pressed during the event.

ctrlKey:
A boolean indicating whether the Control key was pressed during the event.

shiftKey:
A boolean indicating whether the Shift key was pressed during the event.

keyCode (deprecated):
Represents the Unicode value of a key pressed during a keydown or keypress event. For modern usage, prefer event.key.

Example Usage in JavaScript
If you're working with an event, you can access these properties like this:
*/
  document.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Timestamp:', event.timeStamp);
    console.log('Coordinates (client):', event.clientX, event.clientY);
    console.log('Alt key pressed:', event.altKey);
    if (event.defaultPrevented) {
        console.log('Default action prevented');
    }
});
