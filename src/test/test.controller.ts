import { Body, Controller, Get , Param, Post , Delete , Put } from '@nestjs/common';
import { CreateTestDto } from './DTO/create-test.dto';
import Test from './test.entity';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private testService : TestService){
        this.testService=testService;
    }
    // @Get()
    // getAllTask() : Test[]{
    //     return this.testService.getAllTask();
    // };
    @Get('/:id')
    async getTestById(@Param('id') id : number)  {
        try {
            const task = await this.testService.getTestById(id)
            return task;
        } catch (err){
            return err;
        }
    }


    @Post()
    async createTask(@Body() createTestDto : CreateTestDto)  {
        try {
           const task = await this.testService.createTasks(createTestDto);
           return task;
        } catch (err) {
            return err;
        }
    }

    @Delete('/:id')
    async deleteTask(@Param('id') id : number) {
        try {
            const result = await this.testService.deleteTest(id);
            return result;
        } catch (err) {
            return err;
        }
    }

    @Put('/:id')
     updateTest(@Param('id') id : number,@Body() createDto : CreateTestDto) {
        try {
            const result = this.testService.updateTest(id,createDto);
            console.log(createDto)
            return result;
        } catch (err) {
            return err
        }
    }
}


