import { Injectable } from '@nestjs/common';
import { TaskStatus } from './test-statusl';
import Test from './test.entity';
import { v4 as uuid} from 'uuid';
import { CreateTestDto } from './DTO/create-test.dto';
import myDataSource from 'src';
@Injectable()
export class TestService {
    testRepository = myDataSource.getRepository(Test)
    // getAllTask() :  {
        
    // };

    // getTasksById() {

    // };

   async createTasks(createTestDto : CreateTestDto) {
        return await this.testRepository.save(createTestDto)
    };

    deleteTasks(id : string) : void {
    }

    updateStatusTask(id : string){
    
    }
    
}
