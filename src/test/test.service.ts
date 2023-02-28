import { Injectable } from '@nestjs/common';

import Test from './test.entity';
import { v4 as uuid} from 'uuid';
import { CreateTestDto } from './DTO/create-test.dto';
import myDataSource from 'src';
@Injectable()
export class TestService {
    testRepository = myDataSource.getRepository(Test)
    // getAllTask() :  {
        
    // };

    async getTestById(id : number)  {
        const task = await this.testRepository.findOne({where : {id : id}});
        return task;
    };

   async createTasks(createTestDto : CreateTestDto) {
        const task = await this.testRepository.save(createTestDto)
        return task;
    };

    async deleteTest(id : number) {
        const result = await this.testRepository.delete(id);
        return result;
    }

    async updateTest(id : number, data : CreateTestDto){
        const result = await this.testRepository.update(id,data);
        return result;
    }
    
}
