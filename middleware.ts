import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
      publicRoutes: ["/api/uploadthing"]
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


//if you are getting error:TypeError: Cannot read properties of undefined (reading 'bind'), typically occurs when you're trying to access a property or method on an object that hasn't been initialized. In this case, it seems to be related to the next package in your node_modules directory.
// The error you're encountering, TypeError: Cannot read properties of undefined (reading 'bind'), typically occurs when you're trying to access a property or method on an object that hasn't been initialized. In this case, it seems to be related to the next package in your node_modules directory.
// From the information provided in github.com, it appears that this issue can occur when switching between different versions of applications in development. The error is thrown from ws://localhost:3000/_next/webpack-hmr.
// A potential workaround suggested in the same source is to downgrade your next version to 13.4.12. You can do this by running the following command:
// npm i next@13.4.12
// This solution has worked for several users who have encountered the same issue.
// However, if you prefer to stick with the current version of next, you could try replacing the problematic line in your base-server.js file with the following code:
// const origSetHeader = _res && typeof _res.setHeader === 'function' ? _res.setHeader.bind(_res) : null;
// This line checks if _res is defined and if setHeader is a function before trying to bind it. If _res is not defined or setHeader is not a function, it assigns null to origSetHeader.
// Remember to backup your files before making any changes, and test your application thoroughly after making these modifications to ensure that everything is working as expected.
// I chosed to downgrade to 13.4.12