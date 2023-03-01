import { Body, Controller, Get , Param, Post , Delete , Put, UseGuards } from '@nestjs/common';
import { CreateTestDto } from './DTO/create-test.dto';
import Test from './test.entity';
import { TestService } from './test.service';
import { AuthGuard } from "@nestjs/passport"
import { AdminGuard } from 'src/auth/jwt.strategy-admin';
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
    getTestById(@Param('id') id : number)  {
        try {
            const task = this.testService.getTestById(id)
            return task;
        } catch (err){
            return err;
        }
    }


    @Post()
    createTask(@Body() createTestDto : CreateTestDto)  {
        try {
           const task = this.testService.createTasks(createTestDto);
           return task;
        } catch (err) {
            return err;
        }
    }

    @Delete('/:id')
    @UseGuards(AdminGuard)
     deleteTask(@Param('id') id : number) {
        try {
            const result = this.testService.deleteTest(id);
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


