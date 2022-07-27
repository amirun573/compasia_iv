import { Injectable } from '@nestjs/common';
import { UserPostEntity } from '../models/post.entity';
import { DeleteResult, FindManyOptions, Repository,UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPost } from '../models/post.interfce';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {


    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository: Repository<UserPostEntity>
    ){} 

    createPost(UserPost: UserPost): Observable<UserPost>{

        return from(this.userPostRepository.save(UserPost));
    }

    findAllPosts(): Observable<UserPost[]>{

        return from(this.userPostRepository.find());
    }

    updatePost(id: number, userPost: UserPost):Observable<UpdateResult>{

        return from(this.userPostRepository.update(id, userPost));
    }

    deletePost(id: number): Observable<DeleteResult>{
        return from(this.userPostRepository.delete(id));
    }

    findName(userPost){

        return from(this.userPostRepository.find({
            where: {
                "firstname": userPost.firstname,
                "lastname": userPost.lastname

            },
        }));
    }

    findMobile(userPost){

        return from(this.userPostRepository.find({
            where: {
                "mobile_no": userPost.mobile_no
            
            },
        }));
    }
}
