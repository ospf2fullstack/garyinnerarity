const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: "secret_mgejPAroepvbewtx3fCUdTnlK5a7CHAdDF9FenP1xue"
})

;(async() => {
    const res = notion.databases.query({
        database_id: "db4d4ef0d38a42c3bff7b39f680f85ec"
    })

    console.log(res)


})()


