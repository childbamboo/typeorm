import {PrimaryColumn, Column, Table, OneToOne, OneToMany, ManyToOne} from "../../../src/index";
import {Post} from "./Post";
import {Chapter} from "./Chapter";
import {Category} from "./Category";

@Table("sample10_post_details")
export class PostDetails {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    meta: string;

    @Column()
    comment: string;

    @OneToOne(type => Post, post => post.details)
    post: Post;

    @OneToMany(type => Category, category => category.details, {
        cascadeInsert: true,
        cascadeRemove: true
    })
    categories: Category[];

    @ManyToOne(type => Chapter, chapter => chapter.postDetails, {
        cascadeInsert: true,
        cascadeRemove: true
    })
    chapter: Chapter;

}