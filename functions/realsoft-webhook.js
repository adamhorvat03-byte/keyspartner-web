exports.handler = async (event, context) => {
  // Povolenie GET požiadavky pre jednoduché overenie v prehliadači
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "online",
        message: "Realsoft Webhook is running on Netlify Functions",
        endpoint: "/api/realsoft-webhook",
        url: "https://keyspartner.netlify.app"
      })
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log("Prijatý payload z Realsoftu:", event.body);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code: 1,
      message: "Object added",
      url: "https://keyspartner.netlify.app"
    })
  };
};
