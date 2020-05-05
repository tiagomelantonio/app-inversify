import { TidaFramework } from './init/TidaFramework';
import { CustomerController } from './controllers/CustomerController';
import { HealthCkeckController } from './controllers/HealthCheckController';
import { CustomerService } from './services/CustomerService';
import { CustomerServiceImpl } from './services/CustomerServiceImpl';
import { CustomerRepository } from './repositories/CustomerRepository';
import { CustomerRepositoryImpl } from './repositories/CustomerRepositoryImpl';

const tidaFramework = new TidaFramework();

tidaFramework.httpServer.container.bind<HealthCkeckController>('HealthCkeckController').to(HealthCkeckController);
tidaFramework.httpServer.container.bind<CustomerController>('CustomerController').to(CustomerController);
tidaFramework.httpServer.container.bind<CustomerService>('CustomerService').to(CustomerServiceImpl);
tidaFramework.httpServer.container.bind<CustomerRepository>('CustomerRepository').to(CustomerRepositoryImpl);

tidaFramework.start()
