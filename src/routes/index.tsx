import Task from "@/pages/Task";
import User from "@/pages/User";
import Root from "@/Root";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
     {
          path: "/",
          // element: <Root></Root>,
          Component: Root,
          children: [
               {
                    path: "user",
                    Component: User
               },
               {
                    path: "task",
                    Component: Task
               },
               {
                    // path: "task",
                    index: true,
                    Component: Task
               }
          ]
     },
]);

export default router;