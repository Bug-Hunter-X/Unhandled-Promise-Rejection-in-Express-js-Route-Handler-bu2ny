# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications where an unhandled promise rejection within a route handler leads to a crash without informative error messages.  The application uses an asynchronous operation that may fail; however, the error handling is inadequate, resulting in a generic 500 Internal Server Error.

## Bug

The `bug.js` file contains the flawed Express.js application.  The `someAsyncOperation` function simulates an asynchronous operation that might reject with an error.  However, the error handling within the route handler is missing a proper way to send error responses back to the client, leading to an unhandled rejection.

## Solution

The `bugSolution.js` file provides a corrected version.  It demonstrates proper error handling, sending specific and informative error responses (e.g., 500 Internal Server Error with details) to the client instead of crashing.  Error messages are also logged to the console for debugging purposes.