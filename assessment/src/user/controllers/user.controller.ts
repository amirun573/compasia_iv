import { Body,Controller, Post,Get, Put, Param, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserPost } from '../models/post.interfce';
import { Observable } from 'rxjs';
import { DeleteResult, Repository,UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
    appService: any;


    constructor(private userService: UserService){}

    //1. Get list of all contacts.
    @Get()
    findAll(): Observable<UserPost[]>{
        return this.userService.findAllPosts();
    }

    //2. Filter list based on name or mobile number.
    @Get('/search')
    getAllPosts(@Body() post: UserPost): Observable<UserPost[]> {

        try {
            
            if(post.firstname && post.lastname)
            return this.userService.findName(post);
        
            else if(post.mobile_no)
                return this.userService.findMobile(post);

            else
                throw "Please check your attribute";
        } catch (error) {
            return error
        }
        

      }

    //3. Create, update, delete contact.
    @Post()
    create(@Body() post: UserPost): Observable<UserPost>{
        return this.userService.createPost(post)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() post: UserPost
    ):Observable<UpdateResult>{


        return this.userService.updatePost(id,post)
    }

    @Delete(':id')
    delete(
        @Param('id') id: number

    ):Observable<DeleteResult>{
        return this.userService.deletePost(id);
    }
    
    //4. Check duplicate contact based on mobile number.
    @Get('/duplicate')
    getMobile(@Body() post: UserPost) {

        try {
            if(post.mobile_no)
                return this.userService.findMobile(post);

            else
                 throw "Please Provide Phone Nombor";
        } catch (error) {
            return error
        }
        

      }
}
