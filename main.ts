import less from "npm:less@4.2.0";

function handler(request: Request) {
  return new Promise(async (resolve) => {
    const body = await request.text();
    less.render(body).then((output) => {
      resolve(new Response(output.css));
    });
  });
}

Deno.serve(handler);
