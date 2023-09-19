
exports.handler = async function(event, context) {
  console.log("呼ばれました:", event);

  return {
      statusCode: 200,
  };
};

// ドキュメント
// https://docs.netlify.com/functions/scheduled-functions/

