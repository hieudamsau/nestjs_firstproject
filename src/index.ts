import { DataSource } from "typeorm"
import Test from "./test/test.entity"

const myDataSource = new DataSource({
    type: "mysql",
    host: "123.24.143.220",
    port: 3306,
    username: "dev",
    password: "Smt3ch@2022",
    database: "nestjs_demo",
    entities: [Test],
    synchronize: true,
    logging: false,
})


export default myDataSource;