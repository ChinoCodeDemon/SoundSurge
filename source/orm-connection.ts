import { DataSource } from "typeorm";

const connection = new DataSource({
    type: 'sqlite',
    database: 'data.db3',
    entities:{
        // TODO: add entities here
    },
    synchronize: true
})