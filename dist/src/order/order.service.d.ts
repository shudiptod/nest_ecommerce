import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly userRepository;
    private readonly productRepository;
    constructor(orderRepository: Repository<Order>, userRepository: Repository<User>, productRepository: Repository<Product>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
}
