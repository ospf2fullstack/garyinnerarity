const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: "secret_mgejPAroepvbewtx3fCUdTnlK5a7CHAdDF9FenP1xue"
})

;(async() => {
    const res = await notion.databases.query({
        database_id: "f8008d68d1324944ae4029bd5bca2e6e"
    })

    console.log(res)
})()