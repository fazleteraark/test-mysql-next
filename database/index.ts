import { DataSource } from 'typeorm'

const dataSourceConnection = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['database/entity/*.js'],
  logging: true,
  synchronize: false,
})

dataSourceConnection
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch(err => {
    console.error('Error during Data Source initialization:', err)
  })

export default dataSourceConnection
