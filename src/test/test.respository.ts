import {  Repository, EntityRepository} from 'typeorm';
import Test from './test.entity';


@EntityRepository(Test)
export class TestRepository extends Repository<Test>{
}