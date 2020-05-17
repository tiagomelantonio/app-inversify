import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions"

const config: MongoConnectionOptions = {
   "type": "mongodb",
   "host": "localhost",
   "port": 27017,
   "database": "tida-test",
   "useUnifiedTopology": true,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entities/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "subscribers": [
      "src/subscribers/**/*.ts"
   ]
}

export { config }
