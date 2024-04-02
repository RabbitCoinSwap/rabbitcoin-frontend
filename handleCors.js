exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://rabbitcoin.xyz"
      },
      body: JSON.stringify({ message: "CORS header applied successfully" })
    };
  };