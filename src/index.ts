import { serve } from "@hono/node-server";
import "@/lib/types.js";
import app from "@/app.js";
import env from "@/env.js";

const port = env.PORT;

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
