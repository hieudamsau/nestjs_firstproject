import { Body, Controller, Get , Param, Post , Delete , Put } from '@nestjs/common';
import { CreateTestDto } from './DTO/create-test.dto';
import {TaskStatus } from './test-statusl';
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
    getTaskById(@Param('id') id : string)  {
        
    }


    @Post()
    createTask(@Body() createTestDto : CreateTestDto)  {
        this.testService.createTasks(createTestDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id : string) : void{
        
    }

    @Put('/:id')
    updateTask(@Param('id') id : string, @Body('status') status : TaskStatus) {
       
    }
}


