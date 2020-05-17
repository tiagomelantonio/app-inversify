import { AppInversify } from './init/AppInversify';
import { CustomerController } from './controllers/CustomerController';
import { HealthCkeckController } from './controllers/HealthCheckController';
import { CustomerService } from './services/CustomerService';
import { CustomerServiceImpl } from './services/CustomerServiceImpl';
import { CustomerRepository } from './repositories/CustomerRepository';
import { CustomerRepositoryImpl } from './repositories/CustomerRepositoryImpl';

const appInversify = new AppInversify();

appInversify.httpServer.container.bind<HealthCkeckController>('HealthCkeckController').to(HealthCkeckController);
appInversify.httpServer.container.bind<CustomerController>('CustomerController').to(CustomerController);
appInversify.httpServer.container.bind<CustomerService>('CustomerService').to(CustomerServiceImpl);
appInversify.httpServer.container.bind<CustomerRepository>('CustomerRepository').to(CustomerRepositoryImpl);

(async () => {
    await appInversify.start();
    console.log('Application is up');
    
})()
