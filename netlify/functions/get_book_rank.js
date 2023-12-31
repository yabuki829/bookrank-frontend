
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// やりたかったことができそうにない
exports.handler = async function(event, context) {
  // ここで取得する
  //api通信を行う
  // books.jsとして取得したデータをjson形式にして保存する

  console.log("API通信を行います")
  try {
    // APIからデータを取得する
    const response = await axios.get("https://bookrank-render.onrender.com/api/ranking");
    console.log("取得成功")
    const books = response.data;
    
    // 取得したデータを親ディレクトリのbooks.jsに保存する
    fs.writeFileSync(path.join(__dirname, '..', 'books.js'), JSON.stringify(books, null, 2));
    console.log("保存に成功しました")
    return {
      statusCode: 200,
      body: "Data fetched and saved successfully"
    };
  } catch (error) {
    console.log("取得に失敗しました")
    return {
      statusCode: 500,
      body: `Error fetching data: ${error}`
    };
  }
};