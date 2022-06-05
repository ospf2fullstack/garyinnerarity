const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

//Init Client
const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

(async () => {
  const databaseId = 'f8008d68-d132-4944-ae40-29bd5bca2e6e';
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();