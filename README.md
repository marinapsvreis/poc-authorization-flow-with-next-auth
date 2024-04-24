## Getting Started

First install dependencies:
`npm i`

Now run the project with:
`npm run dev`

Frameworks and libs:

- Next.js 13
- Tailwind CSS
- Shadcn
- React Hook Form
- Zod
- NextAuth

List of features:

- Login
- Logout
- Private Routes
- Session Management
- Role Management

Simulation:

The login route is mocked. You need to type theses values on the form:

```
{
  email: 'marina@gmail.com'
  password: '123456'
}
```

You can see the Role Management feature editing the /src/app/api/auth/[...nextauth]/route.ts file!

Just change it:

```
const user = {
          id: "1",
          email: "marina@gmail.com",
          password: "123456",
          role: "admin",
        };
```

To it:

````
const user = {
          id: "1",
          email: "marina@gmail.com",
          password: "123456",
          role: "user",
        };
        
```

Users can't access the dashboard and they are being redirected to /denied screen.
